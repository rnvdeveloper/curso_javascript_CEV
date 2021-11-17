let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', converter);

function converter() {
   let distancia = Number(prompt("Digite uma distância em metros (m)."));
   let metros = Intl.NumberFormat('pt-BR').format(distancia);
   let km = Intl.NumberFormat('pt-BR').format(distancia / 1000);
   let hm = Intl.NumberFormat('pt-BR').format(distancia / 100);
   let dam = Intl.NumberFormat('pt-BR').format(distancia / 10);
   let dm = Intl.NumberFormat('pt-BR').format(distancia / 0.1);
   let cm = Intl.NumberFormat('pt-BR').format(distancia / 0.01);
   let mm = Intl.NumberFormat('pt-BR').format(distancia / 0.001);

   saida.innerHTML = `A distância de ${metros} metros corresponde a: <br>
   ${km} quilômetros (Km), <br>
   ${hm} hectômetros (Hm), <br>
   ${dam} decâmetros (Dam), <br>
   ${dm} decímetros (dm), <br>
   ${cm} centímetros (cm), <br>
   ${mm} milímetros (mm).`
}