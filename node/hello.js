var http = require('http');

http.createServer(function(request, response){
response.writeHead(200);
response.write("Hello World!");
response.end();
console.log(request);
}).listen(8080);
console.log("Listening");

