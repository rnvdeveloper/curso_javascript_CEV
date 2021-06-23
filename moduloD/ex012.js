"Executando código no Nodejs."

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var preTexto = `Agora são ${hora}:${minutos}.`
    if (hora > 0 && hora < 12) {
        console.log(`${preTexto} Bom dia!`)
    } else if (hora >= 12 && hora < 18) {
        console.log(`${preTexto} Boa tarde!`)
    } else {
        console.log(`${preTexto} Boa noite!`)
    }