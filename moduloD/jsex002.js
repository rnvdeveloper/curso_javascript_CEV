function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById("txtano")
    var resultado = document.querySelector("div#resultado")

    if (formano.value.length == 0 || formano.value > ano) {
        alert("Inserido dado inválido, corrija para prosseguir.")
    } else {
        var formsex = document.getElementsByName("radsex")
        var idade = ano - Number(formano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (formsex[0].checked) {
            genero = "Homem"
            if (idade < 12) {
                //criança
                img.setAttribute("src", "../imagens/pessoabebem.png")
            } else if (idade < 18) {
                //jovem
                img.setAttribute("src", "../imagens/pessoajovemm.png")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "../imagens/pessoaadultam.png")
            } else if (idade >= 60) {
                //idoso
                img.setAttribute("src", "../imagens/pessoaidosam.png")
            }
        }

        if (formsex[1].checked) {
            genero = "Mulher"
            if (idade < 12) {
                //criança
                img.setAttribute("src", "../imagens/pessoabebef.png")
            } else if (idade < 18) {
                //jovem
                img.setAttribute("src", "../imagens/pessoajovemf.png")
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "../imagens/pessoaadultaf.png")
            } else if (idade >= 60) {
                //idoso
                img.setAttribute("src", "../imagens/pessoaidosaf.png")
            }
        }
    }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
}
