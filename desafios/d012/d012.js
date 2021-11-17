let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', verificar);


function verificar() {
   let valorAntigo = Number(prompt('Digite o valor antigo do produto'));
   let valorNovo = Number(prompt('Digite o valor novo do produto'));
   let diferenca = valorAntigo < valorNovo ? valorNovo - valorAntigo : valorAntigo - valorNovo;
   let porcentagem = valorAntigo < valorNovo ? `${(((valorNovo / valorAntigo)-1)*100).toFixed(2)}%` : `${(((valorNovo / valorAntigo)-1)*100).toFixed(2)}%`;
   let baratoCaro = valorAntigo < valorNovo ? 'mais caro' : 'mais barato'
   let subiuCaiu = valorAntigo < valorNovo ? 'subiu' : 'caiu'

   let valorAntigoBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorAntigo);
   let valorNovoBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorNovo);
   let diferencaBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(diferenca);

   saida.innerHTML = `Analisando os valores informados, temos os seguintes resultados: <br>
   O produto custava ${valorAntigoBrl} e agora custa ${valorNovoBrl}. <br>
   Hoje o produto está ${baratoCaro}. <br>
   O valor ${subiuCaiu} ${diferencaBrl} em relação ao valor anterior. <br>
   Uma variação de ${porcentagem}.`
}