const Discord = require('discord.js')
require("dotenv").config()
const TOKEN = 'ODU2OTA0MzM1NTgwNzI1Mjkw.GEUWPD.FYnnAqweMkcc22rmTJFyR1zml1a1uO6KPs_N8o'

const client = new Discord.Client({
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

client.on('ready', ()=>{
    console.log('El bot arranca por la derecha')
})

client.on('messageCreate', function(msg){
    if (msg.content === 'ping'){
        msg.reply({
            content: 'pong'})
    }
})


client.login(process.env.TOKEN)