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
console.log(randomFrase())
module.exports = randomFrase;
