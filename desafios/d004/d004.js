let btn = document.querySelector('.botao');
btn.addEventListener('click', comprar);

function comprar() {
   let produto = prompt('Qual produto você está comprando?');
   let valorProduto = Number(prompt(`Qual o valor do ${produto} que você está comprando?`));
   let valorCliente = Number(prompt(`Qual o valor você entregou para pagar o ${produto}?`));
   let troco = Number(valorCliente) - Number(valorProduto);

   let valorProdutoMoeda = valorProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   let valorClienteMoeda = valorCliente.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   let trocoMoeda = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

   alert(`Você comprou um ${produto} que custa ${valorProdutoMoeda}.
   \nVocê entregou para pagamento o valor de ${valorClienteMoeda} e receberá ${trocoMoeda} de troco.
   \nVolte sempre!`)
}
