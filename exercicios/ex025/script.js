let btnContar = document.querySelector('.botao');
btnContar.addEventListener('click', contar);
let resultado = document.querySelector('#resultado');

function contar() {
    let valorFinal = Number(document.querySelector('.textinput').value);
    for (let i = 0; i <= valorFinal; i++) {
        resultado.innerHTML += `> ${[i]} `
    }
    resultado.innerHTML += ` \u{1F3C1}`
}



/* SOLUÇÃO DO PROFESSOR
function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1;`
}
*/