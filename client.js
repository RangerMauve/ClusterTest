function randomString(){
	var res = "";
	for(var i = randomString.size; i; --i)
		res+= randomString
		.characters[
			Math.floor(
				Math.random()*randomString.characters.length
			)
		];
	return res;
}
randomString.characters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
randomString.size = 3;

var socket = require('socket.io-client')
	.connect('http://localhost');
socket.on('connect', function(){
	socket.emit("login",randomString());
});
console.log("Created client");

setTimeout(function(){process.exit()},2000);