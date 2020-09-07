const Discord = require("discord.js");
const cron = require("node-cron");
var guild = null;
//var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var reminderFlag = false;
var task = null;
var data = null;

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
	bot.user.setActivity("Ancestors: The Humankind Odyssey", { type: "PLAYING" })


});
bot.on('message', message => {
	// Nuestro bot necesita saber si ejecutará un
	// Escuchará los mensajes que empiecen con '¡'

if(data == null){
	guild = message.guild.id;


	try {
		
		const fs = require('fs')


		data = fs.readFileSync('servers/' + guild + '.txt', 'utf8')
		
		var channel = data;
		

		cronSend(bot.channels.cache.find(channel => channel.id === data));

	} catch (err) {
	console.log(err);

	}
}

	if (message.content === 'set chair reminder') {
		logger.info('Post IF');
		reminderFlag = !reminderFlag;
		
		chairFunction(message);
		//var args = message.substring(1).split(' ');
		//var cmd = args[0];
		//args = args.splice(1);

	}


});


function chairFunction(message) {
	logger.info('IN Function');

	message.channel.send('Ok.');

	if (reminderFlag == true) {


		deleteFile(message.guild.id);
		saveStaticDataToFile(message.guild.id, message.channel.id);
		a = cronSend(message.channel);
	}

	if (reminderFlag == false) {
		task.stop();
		message.channel.send('Stopped.');
		deleteFile(message.guild.id);
	}


}


function cronSend(channel) {
	channel.send('Starting.');
	task = cron.schedule("*/5 * * * *", () => {

		channel.send('sentate bien mostro', {
			tts: true
		});
	})



}


function saveStaticDataToFile(guild, channel) {


	var fs = require('fs');
	fs.writeFile('servers/' + guild + '.txt', channel, function (err) {
		if (err) {

		}
	});

}


function deleteFile(guild) {

	try {

		var fs = require('fs');


		// delete file named 'sample.txt'
		fs.unlink('servers/' + guild + '.txt', function (err) {

		});

	} catch (err) {

	}

}


