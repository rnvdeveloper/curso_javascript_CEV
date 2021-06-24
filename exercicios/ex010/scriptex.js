var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")
var botao3 = document.getElementById("botao3")
var botao4 = document.getElementById("botao4")
var botao = document.getElementById("botao5")
var interacao = document.getElementById("resultado")

function iniciar1() {
    interacao.innerHTML += `<p>Clicou no botão 1</p>`
}

function iniciar2() {
    interacao.innerHTML += `<p>Clicou no botão 2</p>`
}

function iniciar3() {
    interacao.innerHTML += `<p>Clicou no botão 3</p>`
}

function iniciar4() {
    interacao.innerHTML += `<p>Clicou no botão 4</p>`
}

function zerar () {
    interacao.innerHTML = null
}