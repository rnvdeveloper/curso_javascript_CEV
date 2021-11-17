let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', reajustar);


function reajustar() {
   let nomeFuncionario = prompt('Qual é o nome do funcionário?');
   let salarioFuncionario = Number(prompt(`Qual o valor do salário de ${nomeFuncionario}?`));
   let porcentagemAplicada = Number(prompt(`Qual porcentagem será aplicada sobre o salário de ${nomeFuncionario}?`));
   let valorDoAumento = salarioFuncionario * (porcentagemAplicada/100);
   let valorNovoSalario = salarioFuncionario + valorDoAumento;

   let salarioFuncionarioBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(salarioFuncionario);
   let valorDoAumentoBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorDoAumento);
   let valorNovoSalarioBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorNovoSalario);

   saida.innerHTML = `${nomeFuncionario} recebeu um aumento salarial! <br><br>`;
   saida.innerHTML += `O salário atual de ${nomeFuncionario} era de ${salarioFuncionarioBrl}, e com um aumento de ${porcentagemAplicada}%, seu salário irá aumentar ${valorDoAumentoBrl} no próximo mês. <br>
   A partir de então, ${nomeFuncionario} passará a ganhar ${valorNovoSalarioBrl}.`;
}