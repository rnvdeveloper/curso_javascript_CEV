let outPut = document.querySelector('.output_here');

let btn = document.querySelector('.botao').addEventListener('click', () => {
   let year = Number(prompt('Digite o ano que deseja verificar'));

   let isLeapYear = (year % 400 === 0 && year % 100 === 0) || (year % 4 === 0 && year % 100 !== 0)

   let isLeapYearMessage = `O ano de ${year} <mark><strong>É BISSEXTO</strong></mark>.`;
   let notLeapYearMesssage = `O ano de ${year} <mark><strong>NÃO É BISSEXTO</strong></mark>.`;

   return isLeapYear ? outPut.innerHTML = `${isLeapYearMessage}` : outPut.innerHTML = `${notLeapYearMesssage}`
});