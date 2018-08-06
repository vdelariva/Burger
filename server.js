// Dependencies
// ____________________________________________________________________________________

var express = require("express");
var bodyParser = require("body-parser");

// Setup the Express App
// ____________________________________________________________________________________

var app = express();
var PORT = process.env.PORT || 8080;


// Setup the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup access to static assets, specifically app.js
app.use(express.static('app/public'))

// Setup Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Start server to listen to client requests.
// ____________________________________________________________________________________

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});