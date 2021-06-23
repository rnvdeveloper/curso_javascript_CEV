var interacao = document.getElementById("resultado")
function iniciar () {
    let numero = Number(prompt("Digite o número para verificar."))
    if (numero % 2 == 0) {
        interacao.innerHTML = `O número ${numero} é par.` 
    } else {
        interacao.innerHTML = `O número ${numero} é ímpar.` 
    }
}