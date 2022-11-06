function listFrases(){
const fs = require('fs')
const path = require('path')
let frases = fs.readFileSync(path.join(__dirname,'../db/frases.json'))
frases = JSON.parse(frases);
let todasFrases = Object.values(frases);
let mensaje = ""
for(let i = 0; i<frases.length;i++){
    let frase = JSON.stringify(todasFrases[i])
    mensaje = mensaje + (i+1)+": "+frase+", \n"
}
return mensaje}

module.exports = listFrases
