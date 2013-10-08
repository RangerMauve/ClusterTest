console.log("Starting multi threaded server");

var cluster = require("cluster");
var cpus = require("os").cpus().length;
var exec = require("child_process").exec

var i = 40;
function spawn(){
	exec("node ./client.js");
	if(i--)setTimeout(spawn, 100);
	else process.exit(), console.log("Finished");
}

if(cluster.isMaster){
	while(cpus--)cluster.fork();
	setTimeout(spawn,2000);
} else {
var io = require('socket.io').listen(80);
io.set('log level', 0);

var arr = [];

io.sockets.on('connection', function (socket) {
	socket.on('login', function (data) {
		arr.push(data);
		console.log(JSON.stringify(arr));
	});
});
}