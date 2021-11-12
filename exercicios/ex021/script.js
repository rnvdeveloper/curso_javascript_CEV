let btnContar = document.querySelector('.botao');
btnContar.addEventListener('click', contar);
let resultado = document.querySelector('#resultado');

function contar() {

    for (let i = 1; i < 11; i++) {
        resultado.innerHTML += `> ${[i]} `
    }
    resultado.innerHTML += ` \u{1F3C1}`

}