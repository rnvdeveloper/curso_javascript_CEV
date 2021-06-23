"Executando código no Nodejs."

var idade = 16
var preTexto = `Como sua idade é de ${idade} anos,`
    if (idade < 16) {
        console.log(`${preTexto} você ainda não tem idade para votar, mas sugiro se interessar por política desde já!`)
    } else if (idade < 18 || idade > 65) {
        console.log(`${preTexto} o seu voto é opcional, mas recomendo que vote em nome da democracia.`)
    } else {
        console.log(`${preTexto} o seu voto é obrigatório.`)
    }