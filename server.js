/*-----------------------------------------------------------------
  server.js
  Dummy node microservices to support GraphQL on OpenShift example
------------------------------------------------------------------*/

/*-----------------------------------------------------------------
  Variable Declarations
------------------------------------------------------------------*/
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors');


/*-----------------------------------------------------------------
  Include CORS (cross-origin resource sharing) support
------------------------------------------------------------------*/
app.use(cors());

/*-----------------------------------------------------------------
  parse application/x-www-form-urlencoded
------------------------------------------------------------------*/
app.use(bodyParser.urlencoded({
  extended: false
}))

/*-----------------------------------------------------------------
  parse application/json
------------------------------------------------------------------*/
app.use(bodyParser.json())

/*-----------------------------------------------------------------
  serve static files (index.html, images, css) from the 
  views directory
------------------------------------------------------------------*/
app.use(express.static(__dirname + '/views'));

/*-----------------------------------------------------------------
  GET: /users
  Returns a list of users
------------------------------------------------------------------*/
app.get("/users", function (request, response) {
  var users = ['Peter', 'Paul', 'John', 'Maria', 'Tom'];
  response.json(users);
  return;
});

/*-----------------------------------------------------------------
  GET: /countries
  Returns a list of countries
------------------------------------------------------------------*/
app.get("/countries", function (request, response) {
  var countries = ['Italy', 'Spain', 'United States', 'Germany', 'Australia', 'Hungary'];
  response.json(countries);
  return;
});

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});