botao.addEventListener("click", mostrar)

function mostrar() {
    let interacao = document.querySelector("#resultado")
    let agora = new Date()
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let diaSem = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    let diaSemString = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    let mesString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    interacao.innerHTML = `<p>Dia: ${dia}</p>`
    interacao.innerHTML += `<p>Mês: ${mesString[mes]}</p>`
    interacao.innerHTML += `<p>Ano: ${ano}</p>`
    interacao.innerHTML += `<p>Dia da Semana: ${diaSemString[diaSem]}</p>`
    interacao.innerHTML += `<p>Hora: ${hora}</p>`
    interacao.innerHTML += `<p>Minutos: ${minutos}</p>`
    interacao.innerHTML += `<p>Segundos: ${segundos}</p>`
}