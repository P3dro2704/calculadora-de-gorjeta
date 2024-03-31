let conta = 0

const contaInput =document.querySelector("#conta")
contaInput,addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)

    console.log(conta)
}