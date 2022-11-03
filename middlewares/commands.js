const addFrase = require('./addFrase')
const randomFrase = require('./randomFrase')
function commands(message){
    let command = message.content.substring(1,message.content.indexOf(' '));
    let params = message.content.substring(message.content.indexOf(' ') + 1, message.content.length);

    switch(command){
        case 'addFrase': addFrase(params); console.log("frase añadida")
            break

        default: break
    }

}
module.exports = commands