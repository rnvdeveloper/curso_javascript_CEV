let entradas = document.querySelector('input#entradanum');
let btnInserir = document.querySelector('input#btninserir');
let listaEntradas = document.querySelector('select#listaentradas');
let valores = [];
let btnGerarres = document.querySelector('input#btngerarres');
let res = document.querySelector('div#resultado');

btnInserir.addEventListener('click', preencherListas)

function preencherListas() {
   if (Number(entradas.value) === "") {
      alert('É necessário inserir um número para prosseguir.')
   } else if (Number(entradas.value) < 1 || Number(entradas.value) > 100) {
      alert('O número precisa estar entre 1 e 100.')
   } else if (valores.indexOf(Number(entradas.value)) !== -1) {
      alert('O número é inválido ou já consta na lista, por favor, insira outro número.')
   } else {
      let item = document.createElement("option");
      item.text += `O número inserido foi ${Number(entradas.value)}`
      listaEntradas.appendChild(item)
      res.innerHTML = ""
      valores.push(Number(entradas.value))
   }
   entradas.value = ""
   entradas.focus()
}

btnGerarres.addEventListener('click', mostrarresultados)

function mostrarresultados() {
   if (valores == "") {
      alert('É necessário inserir pelo menos um número na lista.')
   } else {
      let tamanhoLista = `<p>A quantidade de números inseridos foi ${Number(valores.length)}</p>`;
      let maiorValor = `<p>Dentre eles o maior valor informado foi ${Math.max.apply(null, valores)}.</p>`;
      let menorValor = `<p>Dentre eles o menor valor informado foi ${Math.min.apply(null, valores)}.</p>`;
      let soma = `<p>A soma de todos os números da lista é igual a ${valores.reduce((soma, valoresItem) => soma + valoresItem)}.</p>`;
      let media = `<p>A média dos valores informados é igual a ${(valores.reduce((soma, valoresItem) => soma + valoresItem) / valores.length).toLocaleString("pt-BR")}.</p>`;

      res.innerHTML = `<h3>Resultados obtidos:</h3>`
      res.innerHTML += tamanhoLista
      res.innerHTML += maiorValor
      res.innerHTML += menorValor
      res.innerHTML += soma
      res.innerHTML += media
   }
}