/*-----------------------------------------------------------------
  server.js
  Dummy node microservices to support GraphQL on OpenShift example
------------------------------------------------------------------*/

/*-----------------------------------------------------------------
  Variable and Constant Declarations
------------------------------------------------------------------*/
var express = require("express");
var app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

/*-----------------------------------------------------------------
  serve static files (index.html, images, css) from the 
  views directory
------------------------------------------------------------------*/
app.use(express.static(__dirname + '/views'));

app.get('/healthcheck', (req, res) => {
  res.send('Microservice running ok\n');
});

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
  var countries = ['Spain', 'Italy', 'United States', 'Germany', 'Australia', 'Hungary'];
  response.json(countries);
  return;
});

app.listen(PORT, HOST, function () {
  console.log(`Running on http://${HOST}:${PORT}`)
});