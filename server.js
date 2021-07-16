var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Jello world');
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
