let btn = document.getElementsByClassName('botao');
btn[0].addEventListener('click', verificar);

function verificar() {
   let number = Number(prompt("Digite um número inteiro qualquer."));
   let antecessor = number -1;
   let sucessor = number +1;
   alert(`Antes de ${number}, temos o número ${antecessor}.
   \nDepois de ${number}, temos o número ${sucessor}.`)
}