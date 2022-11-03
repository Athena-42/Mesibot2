const welcomeChannelIdOpenal = "760247663139618826"
const welcomeChannelIdPutilines = "1014719550836723866"
function asukaWelcome(member){
	member.guild.channels.cache.get(welcomeChannelIdOpenal).send(`<@${member.id}> Bienvenide peterete https://media.discordapp.net/attachments/856915121988960308/1032375398291472494/mental-illness.gif`)
    member.guild.channels.cache.get(welcomeChannelIdPutilines).send(`<@${member.id}> Bienvenide peterete https://media.discordapp.net/attachments/856915121988960308/1032375398291472494/mental-illness.gif`)
}

module.exports=asukaWelcome;