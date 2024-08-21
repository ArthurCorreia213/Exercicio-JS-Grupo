prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número para ver sua tabuada: "))
let fator = parseInt(prompt("Até qual fator você gostaria de ver o seu número ser multiplicado?: "))

for(let i=1; i <= fator; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}