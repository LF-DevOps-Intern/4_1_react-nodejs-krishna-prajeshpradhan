var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Node JS installed seccessfully');
}).listen(7080);
console.log('Server started on localhost:7080; press Ctrl-C to terminate...!');
