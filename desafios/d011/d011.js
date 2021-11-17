let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', verificar);

function verificar() {
   let anoInformado = Number(prompt('Digite o ano que deseja verificar'));

   let divisivelPor4e100 = anoInformado % 4 === 0 && anoInformado % 100 !== 0 ? true : false;
   let divisivelPor400e100 = anoInformado % 400 === 0 && anoInformado % 100 === 0 ? true : false;
   let resultado = divisivelPor4e100 === true || divisivelPor400e100 === true ? true : false;
   
   let eBissexto = `<mark><strong>É BISSEXTO</strong></mark>`;
   let naoBissexto = `<mark><strong>NÃO É BISSEXTO</strong></mark>`;

   if (resultado === true) {
      saida.innerHTML = `O ano de ${anoInformado} ${eBissexto}.`;

   } else {
      saida.innerHTML = `O ano de ${anoInformado} ${naoBissexto}.`;
   }
}