// Require and boot up the server
var app 	= require('./server.js');
var port 	= process.env.PORT || 3000;

app.listen(port);

console.log('Magic always happens on port ', port);