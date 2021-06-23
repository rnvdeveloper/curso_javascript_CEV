"Executando código no Nodejs."

"Você pode usar a condição na forma positiva ou negativa usando os comandos relacionais == ou !="
"O exemplo abaixo é de uma condição composta, pois além do if, está sendo utilizado também o else"

var pais = "Brasil"
console.log(`Se o seu pais de nascimento é ${pais}.`)
if (pais == "Brasil") {
    console.log("Você é brasileiro.")
} else {
    console.log("Você é estrangeiro.")
}


console.log(`Se o seu pais de nascimento é ${pais}.`)
if (pais != "Brasil") {
    console.log("Você é estrangeiro.")
} else {
    console.log("Você é brasileiro.")
}
