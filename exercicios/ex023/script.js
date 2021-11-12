let btnContar = document.querySelector('.botao');
btnContar.addEventListener('click', contar);
let resultado = document.querySelector('#resultado');

function contar() {
    for (let i = 2; i <= 10; i+=2) {
        resultado.innerHTML += `> ${[i]} `
    }
    resultado.innerHTML += ` \u{1F3C1}`
}



/* SOLUÇÃO DO PROFESSOR
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    let cont = 2
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont += 2 // Corresponde a cont = cont + 2
    }
    saida.innerHTML += ` &#x1F3C1;`
}
*/