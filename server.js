var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.post('/upload', function(request, response) {
    console.log('post', request.body);
    response.end('yes');
});

app.listen(8080);
console.log('Express started at :8080');