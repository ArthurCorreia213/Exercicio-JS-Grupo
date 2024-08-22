prompt = require("prompt-sync")();

let palavra = prompt("Digite uma palavra para ver se ela é um palíndromo: ")
let contrario = ""

for(let i = palavra.length - 1; i>= 0; i--){
    contrario += palavra[i]
}

if(palavra == contrario){
    console.log("Sua palavra é um palindromo!")
}
else{
    console.log("Sua palavra não é um palíndromo")
}

console.log("Sua palavra escrita normalmente: ", palavra)
console.log("Sua palavra escrita ao contrário: ", contrario)