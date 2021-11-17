let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', converter);

let dolarDia = Number(prompt("Antes de iniciar... qual a cotação do dólar hoje? "));

function converter() {
   let valorCarteira = Number(prompt('Quantos R$ você tem na carteira?'));
   let qtdeDolares = valorCarteira / dolarDia;

   let valorCarteiraBrl = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorCarteira);
   let qtdeDolaresUsd = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(qtdeDolares);

   saida.innerHTML = `Com os ${valorCarteiraBrl} que você tem na carteria, você poderia comprar hoje ${qtdeDolaresUsd} dólares.`
}