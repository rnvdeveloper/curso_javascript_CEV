var botao = document.getElementsByClassName("botao")
var interacao = document.getElementById("resultado")

function sortear() {
    let resultado = Math.floor(Math.random() * (100 + 1))
    interacao.innerHTML += `<p>O número sorteado é ${resultado}.</p>`
}

function zerar() {
    interacao.innerHTML = null
}