var botao = document.getElementsByClassName("botao")
var interacao = document.querySelector("#resultado")
var contador = 0 // essa veriável precisa estar fora da função, do contrário o contador não funcionará

function iniciar () {
    contador++
    interacao.innerHTML = `Eu sou o clique de número ${contador}.`

}

function zerar () {
    contador = null // Essa linha serve para zerar efetivamente o contador, sem essa marcação, mesmo depois de clicar em zerar o contador continua de onde parou.
    interacao.innerHTML = "Clicou, zerou!"
}