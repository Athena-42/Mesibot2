function respond(msg){
let randomFrase = require('./randomFrase')     
switch(msg.content){

    case 'ping': msg.reply({content: 'pong'});
    break;

    case 'el regreso...': msg.reply({content: '...del rey B)'});
    break;

    case 'dios': msg.reply({content: 'MÍO'});
    break;

    case 'randomFrase': 
    case 'randomfrase':
    function randomFrase(){
        const fs = require('fs')
        const path = require('path')
        const Math = require('mathjs')
        let frases = fs.readFileSync(path.join(__dirname,'../db/frases.json'))
        frases = JSON.parse(frases);
        let n = Math.randomInt(0, frases.length)
        console.log(n)
        frase = frases[n]
        return frase
        }
        msg.reply({content: randomFrase()})
}

if (msg.content === 'ping'){
}}

module.exports = respond