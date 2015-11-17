var express = require('express');
var app = express();

app.use(express.static('/'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8080);
console.log('Express started at :8080');