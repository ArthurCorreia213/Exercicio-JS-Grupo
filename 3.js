prompt = require("prompt-sync")();

num = 0
do{
    let num = parseInt(prompt("Digite um número para ver se ele é par ou impar: "))
    if(num % 2 == 0){
        console.log(`O número ${num} é par`)
    }
    else{
        console.log(`O número ${num} é impar`)
    }
}while(num != 0)