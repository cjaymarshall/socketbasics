var PORT = process.env.PORT || 3000;  
var express = require('express');

var app = express();
var http = require('http').Server(app);  //http is a node based server call--here we are passing the call to the express at into it 
                                         //so all of the routes we create with the express app feed into http
var io = require('socket.io')(http);  //this calls socket.io using the http server directly-this is what socketio expects


app.use(express.static(__dirname + '/public'));  //app will use the index.html file in public

io.on('connection', function() {
    console.log('user connected via socket.io')
});  //allow io to listen for events--here, io is listening for a connection event to occur


http.listen(PORT, function() {
    console.log('Server started');
});
