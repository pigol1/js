var http = require('http');
http.createServer(function(request, response){
	if(request.url == '/'){
		setTimeout(function(){		
			response.writeHead(200);
			response.writeHead("Context-Type: text/html");
			response.write("Hello World!\n***************\n\n");
			for(var k in request.headers){
				response.write(k + ":" + JSON.stringify(request.headers[k]) + "\n");
			}
			response.end("\n**********\n");
			console.log(request);
		}, 500);
	}else{
		response.end("Incorrect page !!")
	}
}).listen(8080);
console.log("Listening");
