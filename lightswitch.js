//require http-server
var http = require('http');
var server = http.createServer(handleRequest);
//require socket server
var io = require('socket.io')(server);
//require requesthandler aka dispatcher
var dispatcher = require('httpdispatcher');
//require filesystemmanager
var fs = require('fs');
//require relay controller
var relay = require('./relay_onoff')
const PORT = 8124;
var state = 1;

// http-request handler
function handleRequest(request, response){
	try{
		console.log(request.url);
		dispatcher.dispatch(request, response);
	}catch(err){
		console.log(err);
	}
}

// setup dispatcher
dispatcher.onGet("/light", function(req, res) {
	fs.readFile('./index.html', function(err, text){
		res.writeHead(200, {'Content-Type': 'text/html'});
		console.log('Writing html');
		if(err) console.log(err);
		res.end(text,'utf-8');
	});
});
dispatcher.onGet("/style.css", function(req, res) {
	fs.readFile('./style.css', function(err, text){
		res.writeHead(200, {'Content-Type': 'text/css'});
		console.log('Writing css');
		if(err) console.log(err);
		res.end(text,'utf-8');
	});
});


//start server
server.listen(PORT,"0.0.0.0", function(){
	console.log('Server listening on port %s',PORT);
});

io.on('connection', function (socket){
	socket.on('light_switch', function (data){
		console.log(data);
		state = (state == 1) ? 0 : 1;
        relay.OnOff(1, state);
	}
	);
});
