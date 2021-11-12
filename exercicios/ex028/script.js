let btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', calcularFatorial);
let resultado = document.querySelector('#resultado');

function calcularFatorial() {
    let fatorial = Number(document.getElementById('fatorial').value);
    let res = fatorial;
    for (let i = 1; i < fatorial; i++) {
        resultado.innerHTML = `<p>O resultado para o fatorial de ${fatorial} é igual a ${res *= i}.</p>`
    }
}


let btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', limparTela);

function limparTela() {
    resultado.innerHTML = null;
}



/* SOLUÇÃO DO PROFESSOR

function fatorial() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML += `<h2>Calculando ${n}!</h2>`
    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c // Correspondente ao cálculo fat = fat * c
        c --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
}
*/