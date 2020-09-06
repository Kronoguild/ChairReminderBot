const Discord = require("discord.js");
const cron = require("node-cron");
var guild = null;
//var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var reminderFlag = false;
var task = null;
let abc = 0;
let a = 0;
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


	guild = message.guild.id;


	try {
		const fs = require('fs')


		const data = fs.readFileSync('servers/' + guild + '.txt', 'utf8')
		console.log(data)
		var channel = data;

		a = cronSend(client.channels.get(data));

	} catch (err) {


	}

	if (message.content === 'set chair reminder') {
		logger.info('Post IF');
		reminderFlag = !reminderFlag;
		console.log(message.channel.id);
		abc = chairFunction(message);
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

	return 1;

}


function cronSend(channel) {
	channel.send('Starting.');
	task = cron.schedule("*/5 * * * *", () => {

		channel.send('sentate bien mostro', {
			tts: true
		});
	})

	return 1;
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


