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
    appId: "044ad075-a416-4f9d-9c1e-15a2051b0251",
    appPassword: "q1nTuhsggLOiVxGp3Y82fbk"
});



var bot = new botbuilder.UniversalBot(connector);

server.post('api/messages', connector.listen());



bot.dialog('/', function(session) {
    session.send('good morning');
});