let btn = document.getElementsByClassName('botao');
btn[0].addEventListener('click', iniciar);

function iniciar() {
   let name = prompt('Qual o seu nome?');
   let idade = prompt(`Olá, ${name}, quantos você tem?`);
   alert(`Acabei de conhecer ${name}, que tem ${idade} anos de idade!`);
}