let btnContar = document.getElementById('contar');
btnContar.addEventListener('click', calcularTab);
let resultado = document.querySelector('#resultado');

function calcularTab() {
    let tabuada = Number(document.getElementById('tabuada').value);
    resultado.innerHTML = `<p>Segue o resultado para a tabuada do ${tabuada}.</p>`

    for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `${tabuada} x ${i} = ${tabuada * i}<br> `
    }
}


let btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', limparTela);

function limparTela() {
    resultado.innerHTML = null;
}




/* SOLUÇÃO DO PROFESSOR
function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    let c = 1
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c ++
    }
}
*/