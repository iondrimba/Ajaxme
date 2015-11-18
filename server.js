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
})

// POST /login gets urlencoded bodies
app.post('/post', urlencodedParser, function(request, response) {

    if (!request.body) return response.sendStatus(200)
    response.send('welcome, ' + request.body.username)
})

// POST /api/users gets JSON bodies
app.post('/json', jsonParser, function(request, response) {

    response.end('yes');

    if (!request.body) return response.sendStatus(200)
        // create user in req.body
})

app.listen(8080);
console.log('Express started at :8080');
