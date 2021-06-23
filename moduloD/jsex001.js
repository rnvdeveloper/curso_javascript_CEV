
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var minuto = new Date().getMinutes()
    var container = document.querySelector("#container")
    var cor1 = "rgb(138, 189, 231)"
    var cor2 = "rgb(141, 161, 248)"
    var cor3 = "rgb(46, 51, 94)"

    if (minuto < 10) {
        minuto = `0${minuto}`
    }

    if (hora < 10) {
        hora = `0${hora}`
    }

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora}:${minuto}. Bom dia!`
        img.src = '../imagens/imagemdia.png'
        container.style.background = cor1
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora}:${minuto}. Boa Tarde! `
        img.src = '../imagens/imagemtarde.png'
        container.style.background = cor2
    } else {
        msg.innerHTML = `Agora são ${hora}:${minuto}. Boa Noite!`
        img.src = '../imagens/imagemnoite.png'
        container.style.background = cor3
    }
}