let btnContar = document.querySelector('.botao');
btnContar.addEventListener('click', contar);
let resultado = document.querySelector('#resultado');

function contar() {
    for (let i = 1; i < 11; i++) {
        if (i % 2 === 0) {
            resultado.innerHTML += `> <mark>${[i]}</mark> `
        } else {
            resultado.innerHTML += `> ${[i]} `
        }
    }
    resultado.innerHTML += ` \u{1F3C1}`

}


/* SOLUÇÃO DO PROFESSOR
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0) {
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
        } else {
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}
*/