var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type':'text/html'})
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
});

server.listen(8080,'172.16.2.30');