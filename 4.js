// prompt = require("prompt-sync")();

let numeros = []

for(let i = 1; i <= 10; i++){
    const random_number = Math.floor((Math.random() * 100) + 1)
    numeros.push(random_number)
}

console.log(numeros)
console.log(numeros.reduce((a, c) => a + c, 0) / numeros.length)