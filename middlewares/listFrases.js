function listFrases(msg){
const fs = require('fs')
const path = require('path')
let frases = fs.readFileSync(path.join(__dirname,'../db/frases.json'))
frases = JSON.parse(frases);
let todasFrases = Object.values(frases);
for(let i = 0; i<frases.length;i++){
    let mensaje = JSON.stringify(todasFrases[i])
    msg.reply({content: (i+1)+": "+mensaje})}
}

module.exports = listFrases;
