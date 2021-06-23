"Executando código no Nodejs."

"O exemplo abaixo é de uma condição simples, pois é utilizado apenas o if para que o código seja executado adequadamente."

"nNo exemplo abaixo, além dos comandos relacionais < e >, utilizei também o operador lógico de disjunção || para inserir duas possibilidades, ou seja, caso a velocidade seja superior ou inferior a um determinado valor."

var vel = 35
console.log(`A velocidade do seu carro é ${vel} km/h.`)
if (vel > 60 || vel < 30) {
    console.log("Você está fora do limite mínimo e máximo para a pista e foi multado!")
} 

console.log("Dirija com cuidado!")
