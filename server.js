var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// POST
app.post('/posttest', urlencodedParser, function(request, response) {

    response.send('welcome, ' + request.body.name);
});

// ABORT TEST
app.post('/aborttest', urlencodedParser, function(request, response) {
   response.send(request.body);
});
// JSON POST
app.post('/jsontest', jsonParser, function(request, response) {

    response.send('welcome, ' + request.body.name);
});

//ERROR
app.post('/errortest', urlencodedParser, function(request, response) {
	response.status(500).send('Test - Internal Server Error');
});

app.listen(8080);
console.log('Express started at :8080');
