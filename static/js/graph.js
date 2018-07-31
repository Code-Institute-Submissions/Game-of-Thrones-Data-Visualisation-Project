queue()
    .defer(d3.csv, "data/gameOfThronesData.csv")
    .await(makeGraphs);
        
function makeGraphs(error, kingdomData){
    var ndx = crossfilter(kingdomData);
        
        
    kingdomData.forEach(function(d){
        d.ep = parseInt(d.ep);
    })
        
    kingdomData.forEach(function(d){
        d.land = parseInt(d.land);
    })
    
    kingdomData.forEach(function(d){
        d.population = parseInt(d.population);
    })

    
        
    show_kingdom_selector(ndx);
    show_land_data(ndx);
    show_population_data(ndx);
    show_army_size(ndx);
    views_in_millions(ndx);
    
    dc.renderAll();
}


function show_kingdom_selector(ndx) {
    dim = ndx.dimension(dc.pluck('kingdom'));
    group = dim.group()
    
    dc.selectMenu("#kingdom-selector")
        .dimension(dim)
        .group(group);
}

function show_land_data(ndx) {
    var kingDim = ndx.dimension(dc.pluck('kingdom'));
    var land_group = kingDim.group().reduce(

	function (p, v) {
	    p.count++;
		p.total += v.land;
		p.average = p.total / p.count;
		return p;
	},

	function (p, v) {
	    p.count--;
	    if (p.count == 0) {
	        p.total = 0;
	        p.average = 0;
	    } else {
	        p.total -= v.land;
		    p.average = p.total / p.count;
	    }
		return p;
	},

	function () {
		return {
			count: 0,
			total: 0,
			average: 0,
		};
	}
	);
    
    
    dc.pieChart("#percent-of-land-owned")
        .height(350)
        .radius(300)
        .dimension(kingDim)
        .group(land_group)
        .valueAccessor(function(d){
            return d.value.average.toFixed(0);
        })
        .transitionDuration(2000);
}

function show_population_data(ndx) {
    var kingDim = ndx.dimension(dc.pluck('kingdom'));
    var populationInMillions = kingDim.group().reduce(add, remove, initialise);
    
    function add(p, v) {
        p.count++;
        p.total += v.population;
        p.average = p.total / p.count;
        return p;
    }
    
    function remove(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= v.population;
            p.average = p.total / p.count;
        }
        return p;
    }
    
    function initialise(p, v) {
        return {
            total: 0,
            count: 0,
            average: 0,
        };
    }
    
    dc.barChart("#population-of-each-kingdom")
        .width(600)
        .height(400)
        .margins({top: 20, right: 10, bottom: 20, left: 90})
        .dimension(kingDim)
        .group(populationInMillions)
        .valueAccessor(function(d) {
            return d.value.average;
        })
        .transitionDuration(2000)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .yAxis().ticks(12);
} 

function show_army_size(ndx) {
        var dim = ndx.dimension(dc.pluck('kingdom'));
        var quantityByNameInfantry = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Infantry') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
        var quantityByNameCalvalry = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Calvalry') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameUnsullied = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Unsullied') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameArchers = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Archers') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameDothraki = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Dothraki') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameSecondSons = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Second Sons') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNamePikemen = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Pikemen') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameKnights = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Knights') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameAxeMen = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Axe Men') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
         var quantityByNameMenAtArms = dim.group().reduceSum(function (d) {
                if (d.soldier === 'Men at Arms') {
                    return +d.quantity;
                } else {
                    return 0;
                }
            });
        var stackedChart = dc.barChart("#size-of-army");
        stackedChart
            .width(600)
            .height(400)
            .dimension(dim)
            .group(quantityByNameInfantry, "Infantry")
            .stack(quantityByNameCalvalry, "Calvalry")
            .stack(quantityByNameUnsullied, "Unsullied")
            .stack(quantityByNameArchers, "Archers")
            .stack(quantityByNameDothraki, "Dothraki")
            .stack(quantityByNameSecondSons, "Second Sons")
            .stack(quantityByNamePikemen, "Pikemen")
            .stack(quantityByNameKnights, "Knights")
            .stack(quantityByNameAxeMen, "Axe Men")
            .stack(quantityByNameMenAtArms, "Men at Arms")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .legend(dc.legend().x(520).y(0).itemHeight(15).gap(5));
        stackedChart.margins({top: 20, right: 10, bottom: 20, left: 70});
}
    
    
    
    //It seems to be this section here, the data just won't laod in the graph.
    //It's almost exactly the same as the video tutorial on the course subject for 
    //composite charts under DC.jc and Crossfilter.js
    
    
function views_in_millions(ndx) {
    var episode_dim = ndx.dimension(dc.pluck('ep'));
    
    var firstEpisode = episode_dim.bottom(1)[0].ep;
    var lastEpisode = episode_dim.top(1)[0].ep;
    
    var seOneViewsPerEpisode = episode_dim.group().reduceSum(function (d){
        if (d.season === "1") {
            return d.views;
        } else {
            return 0;
        }
    });
    
     var seTwoViewsPerEpisode = episode_dim.group().reduceSum(function (d){
        if (d.season === "2") {
            return d.views;
        } else {
            return 0;
        }
    });
    
     var seThreeViewsPerEpisode = episode_dim.group().reduceSum(function (d){
        if (d.season === "3") {
            return d.views;
        } else {
            return 0;
        }
    });
    
    
    //The graph will render fine:
    
    var compositeChart = dc.compositeChart("#views-per-episode-per-season");
    compositeChart
        .width(900)
        .height(200)
        .dimension(episode_dim)
        .x(d3.time.scale().domain([firstEpisode, lastEpisode]))
        .yAxisLabel("Views in Millions")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
                .colors('green')
                .group(seOneViewsPerEpisode, 'Se1'),
            dc.lineChart(compositeChart)
                .colors('red')
                .group(seTwoViewsPerEpisode, 'Se2'),
            dc.lineChart(compositeChart)
                .colors('blue')
                .group(seThreeViewsPerEpisode, 'Se3'),    
        ])
        .brushOn(false);
        
    dc.renderAll();
}
    
    
    //Attempted a line graph below, no results
    
    
    
// function views_in_millions(ndx) {

//     var episode_dim = ndx.dimension(dc.pluck('ep'));
//     var views_per_epsiode = episode_dim.group().reduceSum(dc.pluck('views'));
    
//     var minEp = episode_dim.bottom(1)[0].ep;
//     var maxEp = episode_dim.top(1)[0].ep;
   
//   dc.lineChart("#views-per-episode-per-season")
//     .width(800)
//     .height(200)
//     .dimension(episode_dim)
//     .group(views_per_epsiode)
//     .transitionDuration(500)
//     .x(d3.time.scale().domain([minEp, maxEp]))
//     .xAxisLabel("Episode")
//     .yAxis().ticks(5);
    
//     dc.renderAll();
   
// }
    
    

    

