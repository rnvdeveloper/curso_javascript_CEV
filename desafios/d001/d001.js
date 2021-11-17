let btn = document.getElementsByClassName('botao');
btn[0].addEventListener('click', apertar1);
btn[1].addEventListener('click', apertar2);
btn[2].addEventListener('click', apertar3);

function apertar1() {
   alert("Você apertou o botão 1!");
}

function apertar2() {
   alert("Você apertou o botão 2!");
}

function apertar3() {
   alert("Você apertou o botão 3!");
}