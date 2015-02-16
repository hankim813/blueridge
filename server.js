// Set up express server

var express = require('express');
var app 		= express();

// Require configuration file

require('./config.js')(app, express);

module.exports = app;