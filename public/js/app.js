var socket = io()  //store the io() function is var socket

socket.on('connect', function() {
    console.log('Connected to socket.io server');
});