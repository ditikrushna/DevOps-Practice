//importing node framework
var express = require('express');

var app = express();

app.get('/', function (request, response) {
    response.status(200).send("Hello World 2");
})
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;