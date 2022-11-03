function addFrase(frase){
const fs = require('fs')
const path = require('path')
let rawdata = fs.readFileSync(path.join(__dirname,'../db/frases.json'));
frases = JSON.parse(rawdata);
console.log(frases)
console.log(typeof frases)
nuevaFrase = frase
frases.push(nuevaFrase)
console.log(frases)
fs.writeFileSync("db/frases.json", JSON.stringify(frases))}

module.exports = addFrase
