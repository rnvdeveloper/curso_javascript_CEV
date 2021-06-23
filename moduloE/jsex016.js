function contar() {
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let resultado = document.getElementById("res")
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        resultado.innerHTML = "Não é possível contar quando faltam dados."
    } else {
        resultado.innerHTML = "Resultado:"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert("Passo inválido, será considerado o passo 1")
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` \u{1F449} ${c}`
            }
        } else {
            // Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` \u{1F449} ${c}`
            }
        }
        resultado.innerHTML += ` \u{1F3C1}`
    }
}