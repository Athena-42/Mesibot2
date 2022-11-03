function respond(msg){
let randomFrase = require('./randomFrase')     
switch(msg.content){

    case 'ping': msg.reply({content: 'pong'});
    break;

    case 'el regreso...': msg.reply({content: '...del rey B)'});
    break;

    case 'dios': msg.reply({content: 'MÍO'});
    break;

    case 'randomFrase': msg.reply({content: ''+ randomFrase});
}

if (msg.content === 'ping'){
}}

module.exports = respond