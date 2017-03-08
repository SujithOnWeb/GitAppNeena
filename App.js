var restify = require('restify');
var botbuilder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});
/*
var connector = new botbuilder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});*/
var connector = new botbuilder.ChatConnector({
    appId: "8567d85d-df78-4db2-9de5-b4a175c0df21",
    appPassword: "6vZN3HG88nWPjTzicX9VEZN"
});



var bot = new botbuilder.UniversalBot(connector);

server.post('api/messages', connector.listen());



bot.dialog('/', function(session) {
    session.send('good morning');
});