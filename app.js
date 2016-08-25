/**
 * Created by Alex on 8/16/2016.
 */

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

// cfenv provides access to your Cloud Foundry environment
var cfenv = require('cfenv');
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.get('/api/demo/test', function(req, res){
    var contentString = '';
    contentString += '{\n';
    contentString += '    "tag": "puppy",\n';
    contentString += '    "method": "server response"\n';
    contentString += '}\n';
    console.log(contentString);
    res.send(contentString);
});

app.listen(appEnv.port, '0.0.0.0', function() {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});