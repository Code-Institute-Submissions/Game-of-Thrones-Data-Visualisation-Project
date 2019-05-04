#Game of Thrones Data Visualisation

This is my second project under Code Institute based on data visualisation. I have based the theme of the data on a T.V series called A Game of Thrones. The site displays some info in regards to 'regions' of the show through data using html, css and javascript.


 
##UX
 
###User Stories

The target audience for this project is aimed at fans of Game of Thrones as it provides them with background infomation for each region within the 'Seven Kingdoms', visually, all on one page. The TV show does not provide much of this info, certainly not as in depth, so is a good resource for fans who are curious and eager to know. This site helps them find this infomation through visual data presentations via graphs for each piece of background info.

'As a new person to the world of Game of Thrones I would like to know a bit more infomation as to what makes up the land the characters come from' - Each piece of data is targeted to a particular 'Region', these regions are what make up the land the characters are from

'As a fan of Game of Thrones, the show doesn't detail military infomation. I would like to know who has the largest and weakest, as well as the largest and smallest armies' - the stacked chart displays how many soldiers each region has in their army as well as what type of soldier.

'As a Game of Thrones fan I would like to know which region is the largest and which is the smallest' - The pie chart visually displays how much of the land each region occupies

'As a long time fan of Game of Thrones I would like to visually see the growing success of the show each episode and season' - The composite chart displays how many views in milions per episode, per season up to season 7

'As a fan of Game of Thrones I would like to know the population of each region' - The bar chart next to the pie chart displays the population of each region in millions to the nearest million.

'As a Game of Thrones fan it would be good to know which main house belongs to which region so I can see which has the biggest army, largest population and how much land they own' - the nine sigils at the top of the page and the text underneath help to categorise the houses into the regions


* All mockups/planning/diagrams can be found as JPG files in this file path /static/css/images/mock ups *

##Technologies

1. HTML - is used to provide the base layer for images/layout/text/frameworks. https://www.w3schools.com/html/html_intro.asp
2. CSS - is used for styling the page. http://www.css3.info/
3. Bootstrap V4.1.1 - is used so the site is as responsive as possible. https://getbootstrap.com/ 
4. JavaScript - is used for creating the charts. https://www.javascript.com/
5. dc.js - is a library from JavaScript to display charts that are data driven and reactive and provide instant feedback to user interaction. https://dc-js.github.io/dc.js/

##Features

###Existing Features
- Feature 1 - The dimensional charting javascript library comes with crossfilter support allowing highly efficient exploration of visual data and user interaction on the site. (Can be found within the script tags in the head of the index.html page)

###Features Left to Implement

In the future I would like to add data for the final season of the show once it has finished (Season 8) as well as an update to the data as army sizes/soldiers will have changed. I would also like to add pages for each region that provides some infomation about them.


##Testing

'As a new person to the world of Game of Thrones I would like to know a bit more infomation as to what makes up the land the characters come from' - this is achieved by simply breaking up the data into categories/kingdoms are listing the specific data within that category in the csv file and connecting it to the app to display.

'As a fan of Game of Thrones, the show doesn't detail military infomation. I would like to know who has the largest and weakest, as well as the largest and smallest armies' - to achieve this I researched an approxiamtion of how many soldiers and what kind each region had and used infomation mention in the show, e.g. 8000 Unsullied. To display this info a stacked bar chart was the best option from all graph types available. It provides the user with both the total of army size as well as the type of soldier in their army from each region.

'As a Game of Thrones fan I would like to know which region is the largest and which is the smallest' - in order to easily provide the user's with this infomation was within a pie chart. The user can easily discern which regions are largest and smallest by looking at which regions take up the largest and smallest slices of the pie chart.

'As a long time fan of Game of Thrones I would like to visually see the growing success of the show each episode and season' - To achieve this the data would have to be displayed in a user friendly manner due to the amount of data. There are many seasons and many espiodes so the best way to provide this info is via a composite chart as it displays the data in an easily digestible manner through lines.

'As a fan of Game of Thrones I would like to know the population of each region' - the bar chart was the best option for the user to get this infomation. As the number is held in millions and is an approximation to the nearest million, it is best displayed in whole numbers wihtin chart.

'As a Game of Thrones fan it would be good to know which main house belongs to which region so I can see which has the biggest army, largest population and how much land they own' - the best way of providing the user with an easily digestible solution to this was to add images of the main house sigils from the show which are recognisable with the house name and region name beneath each one. This way the user can choose the house/region they wish to find the info about from and match the region name in the graphs below and vice versa.

The crossfilter allows the charts to behave intuitively and in sync to display data to the user. To test that the charts were behaving correctly, the 'select kingdom' dropdown will allow a user to select a kingdom at a time which targets the charts and change the info to the specific kingdom selected in the dropdown. The Reset Charts button allows the user to refresh the charts back to their original state so that they do not feel the need to have to refresh the page.

The chart containers are responsive on different screen sizes. The stacked and composite charts take the full width of the page due to their sizes as is more easy to digest the info and sits nicely on the page. The pie chart and bar chart will take up the full width of the page on medium and small screens. The images on the page will also 'stack' as the page reduces in size and each image with the associated text will display one on top of the other.


##Deployment

This project is hosted on GitHub pages and is deployed from the master branch. With each change committed the site will be updated and new the new changes will be displayed.


##Credits

###Content
The data for quantity of views in millions was taken from Wikipedia: https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_episodes

###Media
- The photos used in this site were obtained from Google images

###Acknowledgements

- I received inspiration for this project from HBO's television series A Game of Thrones