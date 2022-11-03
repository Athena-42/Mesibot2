const Discord = require('discord.js')
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
    console.log('El bot arranca por la derecha')
})

bot.on('messageCreate', function(msg){
    if (msg.content === 'ping'){
        msg.reply({
            content: 'pong'})
    }
})

bot.on('messageCreate', function(msg){
    if (msg.content === 'el regreso...'){
        msg.reply({
            content: '...del rey B)'})
    }
})
bot.on('messageCreate', function(msg){
    if (msg.content === 'dios'){
        msg.reply({
            content: 'MÍO'})
    }
})

const welcomeChannelId = "760247663139618826"


bot.on("guildMemberAdd",  (member)=>{
	member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Bienvenide peterete https://media.discordapp.net/attachments/856915121988960308/1032375398291472494/mental-illness.gif`)
})

bot.login(process.env.TOKEN)

