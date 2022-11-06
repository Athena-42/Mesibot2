const addFrase = require('./addFrase')
const randomFrase = require('./randomFrase')
const listFrases = require('./listFrases')
const Database = require("@replit/database")
const path = require('path');
const db = new Database()
function commands(message){
    let command = message.content.substring(1,message.content.indexOf(' '));
    let params = message.content.substring(message.content.indexOf(' ') + 1, message.content.length);
    
    switch(command){
        case 'addFrase':
        case 'addfrase':    
        addFrase(params); console.log('Frase añadida');  message.reply({content: 'frase nueva añadida!'})
        break
        case 'random':
        case 'frase':
        case 'randomfrase':
        case 'randomFrase':
        case 'RandomFrase':
          case 'randomFrase': 
          message.reply({content: randomFrase()})
        break;
        
        case 'listfrases':
        case 'frases':    
            message.reply({content: listFrases()})
        default: break;
}
    }


module.exports = commands