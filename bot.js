const Discord = require("discord.js");
const cron = require("node-cron");
//var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var reminderFlag = false;
let abc = 0
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
//var bot = new Discord.Client({
//token: auth.Token,
//autorun: true
//});

const bot = new Discord.Client();

bot.login(auth.Token);



bot.on('ready', function (evt) {
logger.info('Connected');
logger.info('Logged in as: ');
logger.info(bot.username + ' – (' + bot.id + ')');
});
bot.on('message', function (channelID, message) {
// Nuestro bot necesita saber si ejecutará un
// Escuchará los mensajes que empiecen con '¡'
logger.info('Pre IF');
if (message.content === 'set chair reminder') {
logger.info('Post IF');
reminderFlag = !reminderFlag;
abc = chairFunction();
//var args = message.substring(1).split(' ');
//var cmd = args[0];
//args = args.splice(1);

}


});


function chairFunction() {
	logger.info('IN Function');
	
	message.reply(Ok.)
	
    if (reminderFlag == true) {
		message.reply(Starting.)
		var task = cron.schedule("0 0/5 * * * ? *", () => {

message.reply(/tts sentate bien mostro
		
   }
   
if (reminderFlag == false) {
	task.stop();
	message.reply(Stopped.)

return 1;

}