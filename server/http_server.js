/**
 * Created by pigol on 17/01/15.
 */

var http = require('http');
var util = require('util');

http.createServer(function (req, res) {
    console.time("first");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

    console.timeEnd("first");
    console.log(util.format("Headers: %j", JSON.stringify(req.headers)))

}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
console.log(util.format('%s:%d', "name", 100));