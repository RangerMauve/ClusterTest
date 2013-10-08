console.log("Starting single threaded server");

var exec = require("child_process").exec
var io = require('socket.io').listen(80);
io.set('log level', 0);

var arr = [];

io.sockets.on('connection', function (socket) {
	socket.on('login', function (data) {
		arr.push(data);
		console.log(JSON.stringify(arr));
	});
});

var i = 40;
function spawn(){
	exec("node ./client.js");
	if(i--)setTimeout(spawn, 100);
	else process.exit(), console.log("Single threaded test finished");
}
spawn();