
botao.addEventListener("click", idade)

function idade () {
    let interacao = document.querySelector("#resultado")
    let anoAtual = new Date().getFullYear()
    let anoNasc = Number(prompt("Digite abaixo o ano do seu nascimento."))
    let calculo = anoAtual - anoNasc
    interacao.innerHTML = `De acordo com o ano informado, ${anoNasc}, você terá ao final de ${anoAtual}, ${calculo} anos.`
}