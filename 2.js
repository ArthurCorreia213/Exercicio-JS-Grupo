prompt = require("prompt-sync")();

for(let i= 1; i<=5 ;i++){
    let nome_mais_velho
    let idade_mais_velho = 0 

    let nome = prompt("Digite um nome: ")
    let idade = parseInt(prompt("Digite sua idade: "))
    
    if(idade > idade_mais_velho){
        idade_mais_velho = idade
        nome_mais_velho = nome
    }

    if(i==5){
        console.log(`A pessoa mais velha é ${nome_mais_velho}, com ${idade_mais_velho} anos de idade`)
    }
}