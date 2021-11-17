let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', avaliarAluno);


function avaliarAluno() {
   let nomeEstudante = prompt('Digite o nome do aluno');
   let nota1 = Number(prompt(`Digite a primeira nota de ${nomeEstudante}`));
   let nota2 = Number(prompt(`Digite a segunda nota de ${nomeEstudante}`));
   let media = (nota1 + nota2) / 2;

   let recuperacao = media <= 6 ? true : false;
   let reprovado = media < 3 ? true : false;
   
   let aprovadoTxt = `<p>Avaliando a situação de ${nomeEstudante} temos:</p> <br>
   Com as notas ${nota1} e ${nota2}, a média atingida é ${media}. <br>
   Com média acima de 6,0, o aluno está <mark><strong>APROVADO</strong></mark>.`
   let recuperacaoTxt = `<p>Avaliando a situação de ${nomeEstudante} temos:</p> <br>
   Com as notas ${nota1} e ${nota2}, a média atingida é ${media}. <br>
   Com média entre 3 e 6,0, o aluno está em <mark><strong>RECUPERAÇÃO</strong></mark>.`
   let reprovadoTxt = `<p>Avaliando a situação de ${nomeEstudante} temos:</p> <br>
   Com as notas ${nota1} e ${nota2}, a média atingida é ${media}. <br>
   Com média abaixo de 3,0, o aluno está <mark><strong>REPROVADO</strong></mark>.`

   if (reprovado === true) {
      saida.innerHTML = reprovadoTxt;
   } else if (recuperacao === true) {
      saida.innerHTML = recuperacaoTxt;
   } else {
      saida.innerHTML = aprovadoTxt;
   }
}