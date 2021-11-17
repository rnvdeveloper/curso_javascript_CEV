let btn = document.querySelector('.botao');
let saida = document.querySelector('.saida');
btn.addEventListener('click', converter);

function converter() {
   let givenTemperature = Number(prompt('Digite uma temperatura em ºC (Celsius).'));
   let temperaturaCelsius = Intl.NumberFormat('pt-BR').format(givenTemperature);
   let temperaturaKelvin = Intl.NumberFormat('pt-BR').format(givenTemperature + 273.15);
   let temperaturaFahrenheit = Intl.NumberFormat('pt-BR').format((givenTemperature * 9/5) + 32);

   saida.innerHTML = `A temperatura ${temperaturaCelsius} ºC, corresponde a ${temperaturaKelvin} ºK (Kelvin) e ${temperaturaFahrenheit} ºF (Fahrenheit).`
}