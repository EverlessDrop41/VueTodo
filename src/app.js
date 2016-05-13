'use strict';

var express = require('express');
var app = express();

var body_parser = require('body-parser');

app.use(body_parser.json());
app.use('/', express.static('public'))

app.listen(3000);
