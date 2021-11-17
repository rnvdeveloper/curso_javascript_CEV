let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', descontar);


function descontar() {
   let desconto = 0.10;
   let produto = prompt('Qual produto foi comprado?');
   let valorProduto = Number(prompt(`Qual o valor do ${produto} comprado?`));
   let totalDescontado = valorProduto * desconto;
   let valorComDesconto = valorProduto - totalDescontado;

   let valorProdutoBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorProduto);
   let totalDescontadoBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totalDescontado);
   let valorComDescontoBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorComDesconto);

   saida.innerHTML = `Calculando o desconto de 10% sobre o valor do ${produto}: <br>
   O valor original é de ${valorProdutoBrl} e você ganhou um desconto de ${totalDescontadoBrl}. <br>
   No fim, você vai pagar apenas ${valorComDescontoBrl} pelo produto ${produto}.`
}