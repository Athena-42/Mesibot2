function randomFrase(){
const fs = require('fs')
const path = require('path')
const Math = require('mathjs')
let frases = fs.readFileSync(path.join(__dirname,'../db/frases.json'))
frases = JSON.parse(frases);
randomFrase = frases[Math.randomInt(0, frases.length)]
return randomFrase
}
console.log(randomFrase())
module.exports = randomFrase;
