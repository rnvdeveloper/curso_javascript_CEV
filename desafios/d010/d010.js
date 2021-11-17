let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', calcular);


function calcular() {
   let equacaoText = '<strong>ax<sup>2</sup> + bx + c = 0</strong>'
   let deltaNegativoText = `Quando &Delta; é menor que 0 a equação não possui resultados reais.`

   let valorA = Number(prompt('Digite o valor de a'));
   let valorB = Number(prompt('Digite o valor de b'));
   let valorC = Number(prompt('Digite o valor de c'));
   let valorABCText = `a = ${valorA}, b = ${valorB} e c = ${valorC}`;

   let delta = (valorB**2) - 4 * valorA * valorC;

   let valorX1;
   let valorX2;
   delta < 0 ? valorX1 = deltaNegativoText : valorX1 = (-valorB + (Math.sqrt(delta))) / 2 * valorA;
   delta < 0 ? valorX2 = deltaNegativoText : valorX2 = (-valorB - (Math.sqrt(delta))) / 2 * valorA;

   saida.innerHTML = `Dada a equação ${equacaoText}, onde ${valorABCText}, temos: <strong>${valorA}x<sup>2</sup> + ${valorB}x + ${valorC} = 0</strong> <br><br>`;
   saida.innerHTML += `
   Para: <br>
   &Delta; = <strong>b<sup>2</sup> - 4.a.c</strong> <br>
   &Delta; = <strong>${valorB}<sup>2</sup> - 4.${valorA}.${valorC}</strong> <br>
   &Delta; = ${delta} <br><br>
   Logo, onde X = -b +- &Sqrt; &Delta; / 2.a, as raízes da equação ${equacaoText} são:<br>
   x1 = ${valorX1} <br>
   x2 = ${valorX2}`
}