botao.addEventListener("click", adivinhar)

let interacao = document.querySelector("#resultado")
let computador = 0
let palpite = 0

function sortear() {
    let min = 1 // As variáveis declaradas aqui dentro são LOCAIS, e só funcionam dentro da função onde foram declaradas
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function adivinhar() {
    let palpite = Number(prompt("Digite abaixo o seu paipite."))
    if (palpite > computador) {
        interacao.innerHTML = `Você digitou ${palpite}. O numero que tenho em mente é menor.`
    } else if (palpite < computador) {
        interacao.innerHTML = `Você digitou ${palpite}. O numero que tenho em mente é maior.`
    } else if (palpite == computador) {
        interacao.innerHTML = `Parabéns! Eu pensei no número ${computador} e você acertou!`
    }
}