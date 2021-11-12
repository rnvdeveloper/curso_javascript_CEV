let resultado = document.getElementById('resultado');
let btnIniciar = document.getElementById('btniniciar');
let btnLimpar = document.getElementById('btnlimparresultado')

/* Esta foi a minha primeira opção de código, mas para o exercício proposto foi utilizado o switch case
btnIniciar.addEventListener('click', iniciarProcesso)

function iniciarProcesso() {
   let number1 = Number(prompt("Insira um número diferente de zero."))
   let number2 = Number(prompt("Insira outro número diferente de zero."))
   let options = Number(prompt(`Digite abaixo o número correspondente a operação a ser realizada.
   1 - Para somar
   2 - Para subtrair
   3 - Para dividir
   4 - Para multiplicar`))
   let somar = `Você optou por somar os números ${number1} e ${number2}, o resultado da operação é ${(number1 + number2).toLocaleString('pt-BR')}.`;
   let subtrair = `Você optou por subtrair os números ${number1} e ${number2}, o resultado da operação é ${(number1 - number2).toLocaleString('pt-BR')}.`;
   let dividir = `Você optou por dividir os números ${number1} e ${number2}, o resultado da operação é ${(number1 / number2).toLocaleString('pt-BR')}.`;
   let multiplicar = `Você optou por multiplicar os números ${number1} e ${number2}, o resultado da operação é ${(number1 * number2).toLocaleString('pt-BR')}.`;
   let ausenciaDeDados = "É necessário escolher uma operação para que tenha um resultado válido.";

   if (options == 1) {
      resultado.innerHTML = somar;
   } else if (options == 2) {
      resultado.innerHTML = subtrair;
   } else if (options == 3) {
      resultado.innerHTML = dividir;
   } else if (options == 4) {
      resultado.innerHTML = multiplicar;
   } else {
      resultado.innerHTML = ausenciaDeDados;
   }
}
*/


btnIniciar.addEventListener('click', iniciarProcesso)

function iniciarProcesso() {
   let number1 = Number(prompt("Insira um número diferente de zero."))
   let number2 = Number(prompt("Insira outro número diferente de zero."))
   let options = Number(prompt(`Digite abaixo o número correspondente a operação a ser realizada.
   1 - Para somar
   2 - Para subtrair
   3 - Para dividir
   4 - Para multiplicar`))
   let somar = `Você optou por somar os números ${number1} e ${number2}, o resultado da operação é ${(number1 + number2).toLocaleString('pt-BR')}.`;
   let subtrair = `Você optou por subtrair os números ${number1} e ${number2}, o resultado da operação é ${(number1 - number2).toLocaleString('pt-BR')}.`;
   let dividir = `Você optou por dividir os números ${number1} e ${number2}, o resultado da operação é ${(number1 / number2).toLocaleString('pt-BR')}.`;
   let multiplicar = `Você optou por multiplicar os números ${number1} e ${number2}, o resultado da operação é ${(number1 * number2).toLocaleString('pt-BR')}.`;
   let ausenciaDeDados = "É necessário escolher uma operação para que tenha um resultado válido.";

   switch (options) {
      case 1:
         resultado.innerHTML = somar;
         break;

      case 2:
         resultado.innerHTML = subtrair;

      case 3:
         resultado.innerHTML = dividir;
         break;

      case 4:
         resultado.innerHTML = multiplicar;
         break;

      default:
         resultado.innerHTML = ausenciaDeDados;
   }
}

btnLimpar.addEventListener('click', limparResultado)

function limparResultado() {
   resultado.innerHTML = ""
}