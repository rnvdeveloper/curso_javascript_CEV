var interacao = document.querySelector("#resultado")

botao.addEventListener("click", iniciar)

function iniciar () {
    let num1 = Number(prompt("Digite o 1º número da comparadação."))
    let num2 = Number(prompt("Digite o 2º número da comparadação."))

    if (num1 > num2) {
        interacao.innerHTML = `Entre os números ${num1} e ${num2}, o número ${num1} é o maior eles.`
    } else if (num1 < num2) {
        interacao.innerHTML = `Entre os números ${num1} e ${num2}, o número ${num2} é o maior eles.`
    } else {
        interacao.innerHTML = `Entre os números ${num1} e ${num2}, não há diferença, eles são iguais.`
    }
}