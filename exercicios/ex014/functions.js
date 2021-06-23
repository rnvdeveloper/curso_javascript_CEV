var interacao = document.getElementById("resultado")
var botao = document.getElementsByClassName("botao")

function mostrarData() {
    let agora = new Date()
    interacao.innerHTML = agora
}



