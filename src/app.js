'use strict';

var express = require('express');
var app = express();

var body_parser = require('body-parser');
var apiRouter = require('./api');

require("./database.js");

app.use(body_parser.json());

app.use('/', express.static('public'));
app.use('/api', apiRouter);

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Started app on port " + port);
});
