let btnContar = document.getElementById('contar');
btnContar.addEventListener('click', contar);
let resultado = document.querySelector('#resultado');

function contar() {
    let valorInicial = Number(document.getElementById('valorinicial').value);
    let valorFinal = Number(document.getElementById('valorfinal').value);

    if (valorInicial < valorFinal) {
        for (let i = valorInicial; i <= valorFinal; i++) {
            resultado.innerHTML += `> ${[i]} `
        }
    }

    if (valorInicial > valorFinal) {
        for (let i = valorInicial; i >= valorFinal; i--) {
            resultado.innerHTML += `> ${[i]} `
        }
    }
    resultado.innerHTML += ` \u{1F3C1}`
}


let btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', limparTela);

function limparTela() {
    resultado.innerHTML = null;
}



/* SOLUÇÃO DO PROFESSOR
function contagem() {
    let saida = document.getElementById('saida')
    let n1 = Number(document.getElementById('fn1').value)
    let n2 = Number(document.getElementById('fn2').value)
    let cont

    saida.innerHTML += `<h2>Contando de ${n1} até ${n2} </h2>`
    if (n1<n2) {
        cont = n1
        while (cont <= n2) {
            saida.innerHTML += ` ${cont} &#x1F449;`
            cont ++
        }
    } else  if (n2<n1) {
        cont = n1
        while (cont >= n2) {
            saida.innerHTML += ` ${cont} &#x1F449;`
            cont --
        }
    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    
    saida.innerHTML += ` &#x1F3C1;`
}
*/