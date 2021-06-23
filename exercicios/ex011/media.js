var interacao = document.getElementById("resultado")
botao.addEventListener("click", media)

function media() {
    let nome = prompt("Digite no campo abaixo o nome do aluno.")
    let n1 = Number(prompt("Digite a nota do 1º trimestre"))
    let n2 = Number(prompt("Digite a nota do 2º trimestre"))
    let n3 = Number(prompt("Digite a nota do 3º trimestre"))
    let n4 = Number(prompt("Digite a nota do 4º trimestre"))
    let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2)

    interacao.innerHTML = `<p>Veja abaixo o cálculo da média de ${nome}:</p>`
    interacao.innerHTML += `<p>As notas inseridas para ${nome} foram: ${n1}, ${n2}, ${n3} e ${n4}.</p>`
    interacao.innerHTML += `De acordo com as notas inseridas a média final é igual a ${media}.`
    if (n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10) {
        alert("Uma das notas foi inserida incorretamente, por favor, revisar os dados.")
    } else if (media >= 7) {
        interacao.innerHTML = `Parabéns ${nome}, você foi aprovado para a próxima fase e logo receberá novas instruções.`
    } else if (media >= 5) {
        interacao.innerHTML = `${nome}, você não foi aprovado, no entanto, ainda há uma chance, e lhe enviaremos intruções para um teste de reclassificação.`
    } else {
        interacao.innerHTML = `${nome}, desta vez a sua nota não atingiu o valor necessário para prosseguir, mas não desanime, continue estudando e fique de olho em novas oportunidades!`
    }
}
