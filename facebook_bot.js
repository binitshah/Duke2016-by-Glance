var page_token = ("insert your page_token from facebook here");
var verify_token = ("insert your verify_token you set in fb developer console here");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http').Server(app);

//////////////////////////////////////////////////
var Botkit = require('./lib/Botkit.js');
var controller = Botkit.facebookbot({
    debug: true,
    access_token: page_token,
    verify_token: verify_token
});

var bot = controller.spawn({

});


//added to stop the debug tick remarks in console
controller.on('tick', function(bot, event) {});

controller.setupWebserver(process.env.port || 5000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log('ONLINE!'); //insert web server controls

    });
});