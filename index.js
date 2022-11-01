const Discord = require('discord.js')
require("dotenv").config()
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

client.on('ready', (req,res)=>{
    res.send('El bot arranca por la derecha')
})

client.on('messageCreate', function(msg){
    if (msg.content === 'ping'){
        msg.reply({
            content: 'pong'})
    }
})

client.on('messageCreate', function(msg){
    if (msg.content === 'el regreso...'){
        msg.reply({
            content: '...del rey B)'})
    }
})
client.on('messageCreate', function(msg){
    if (msg.content === 'dios'){
        msg.reply({
            content: 'MÍO'})
    }
})

const welcomeChannelId = "760247663139618826"


client.on("guildMemberAdd",  (member)=>{
	member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Bienvenide peterete https://media.discordapp.net/attachments/856915121988960308/1032375398291472494/mental-illness.gif`)
})

client.login(process.env.TOKEN)