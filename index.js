const Discord = require('discord.js')
const chatCommands = require('./middlewares/chat-commands')
const welcome = require('./middlewares/welcome-message')
const commands = require('./middlewares/commands')
const Database = require("@replit/database")
const db = new Database()
require("dotenv").config()
const bot = new Discord.Client({
	intents: [
		"GuildMessages",
		"MessageContent",
		"GuildMembers",
		"Guilds",
		"DirectMessages",
		"GuildMessageReactions",
		"DirectMessageReactions"
	],
});

bot.on('ready', ()=>{
    console.log('El bot está listo')
})

//Message responses

bot.on('messageCreate', chatCommands)

//welcome message
bot.on("guildMemberAdd", welcome)

//Comandos con prefijo

const PREFIX = "+";

bot.on('messageCreate', function(message) {
    if(message.content[0] === PREFIX) {
         commands(message);
    }
    });

bot.login(process.env.TOKEN)
