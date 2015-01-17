/**
 * Created by pigol on 17/01/15.
 */


var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    bodyparser = require("body-parser");

var app = express();

//app.use(bodyparser.json);

app.get('/api', function (req, res) {
    res.send('Ecomm API is running');
    console.log(app.mountpath);
});

app.post("/api", function(req, res){
    console.log("Got a post request:" + JSON.stringify(req.headers));

    if(req.is("json")){
        console.log("Yes a json request");
    }

    console.log("Url: " + req.url);

    var r = "";
    for(var h in req.headers) {
        console.log("Header: " + h);
        r += h + " " + req.headers[h] + "\n";
    }
    //res.status(404);
    res.type('json');
    res.send({"name": "piyush goel", "age" : 30, "city" : "Bangalore"});
});

// Launch server

app.listen(3131);
console.log(app.mountpath);