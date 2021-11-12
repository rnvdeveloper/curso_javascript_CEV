let btnIniciar = document.querySelector('.botao');
btnIniciar.addEventListener('click', iniciar);
let resultado = document.getElementById('resultado');
const meses = ['dezembro', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro'];


function iniciar() {
    let entradaMes = prompt('Digite no campo abaixo o nome do mês.').toLowerCase();
    let index = meses.indexOf(entradaMes)

    if (index > -1 && index < 3 || entradaMes == 12 || entradaMes == 1 || entradaMes == 2) {
        resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Verão.`
    } else if (index > 2 && index < 6 || entradaMes > 2 && entradaMes < 6) {
        resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Outono.`
    } else if (index > 5 && index < 9 || entradaMes > 5 && entradaMes < 9) {
        resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Inverno.`
    } else if (index > 8 && index < 12 || entradaMes > 8 && entradaMes < 12) {
        resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Primavera.`
    } else {
        resultado.innerHTML = `O mês não foi digitado corretamente, tente novamente.`
    }
}


/* PROPOSTA INICIAL USANDO SWITCH
function iniciar() {
    let entradaMes = prompt('Digite no campo abaixo o nome do mês.').toLowerCase();

    switch (entradaMes) {
        case 'dezembro':
        case 'janeiro':
        case 'fevereiro':
            resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Verão.`
            break;

        case 'março':
        case 'abril':
        case 'maio':
            resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Outono.`
            break;

        case 'junho':
        case 'julho':
        case 'agosto':
            resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Inverno.`
            break;

        case 'setembro':
        case 'outubro':
        case 'novembro':
            resultado.innerHTML = `No mês indicado, ${entradaMes}, a estação é Primavera.`
            break;

        default:
            resultado.innerHTML = `O mês não foi digitado corretamente, tente novamente.`;
    }
}
*/