# Burger

## Purpose: ##

Following MVC design pattern, create an application using MySQL, Node, Express, Handlebars and a homemade ORM to display burger options and log burger consumption.

## Description ##

The Burger website will show the available burgers for consumption. The user can add new burgers to the list. By clicking on the fork/knife icon, the user 'consumes' the burger. The burger is then removed from the menu and added to the 'Devoured' list. Once on the devoured list, the user can no longer select the burger, but can delete the burger by clicking on the trash icon.

Link to app deployed on Heroku: [frozen-tundra-72523](https://frozen-tundra-72523.herokuapp.com/#)

## Tools ##

**NPM Libraries**
* express
* body-parser
* mysql
* express-handlebars

**Frameworks**
* Bootstrap

## Developer's Notes: ##
* Validation is performed when entering a new burger. The app requires a non-blank entry, anything else goes. If the user enters a blank burger name, the app will display a Bootstrap alert notifying the user to enter a burger name. The alert will close if the user selects the 'x'.

## Assets used: ##

Icon Shop: https://freeiconshop.com/
