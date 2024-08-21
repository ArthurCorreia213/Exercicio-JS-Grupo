prompt = require("prompt-sync")();

const random_number = Math.floor((Math.random() * 100) + 1)
let user_choise
vidas = 3

do{
    const user_choise = parseInt(prompt("Digite um número: "))

    if(user_choise < random_number){
        console.log("Você errou, o número secreto é mais alto")
        console.log("Você possui ", vidas, " vidas")
        vidas -=1
    }
    else if(user_choise == random_number){
        console.log("Você acertou o número secreto era ", random_number)
        break
    }
    else{
        console.log("Você errou, o número secreto é menor")
        vidas -=1
    }

    if(vidas == 0){
        console.log("Game over")
        console.log("O número secreto era ", random_number)
    }
} while(vidas != 0 && user_choise != random_number)
