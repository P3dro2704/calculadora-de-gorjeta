let conta = 0

const contaInput =document.querySelector("#conta")
contaInput,addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)

    console.log(conta)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQunatidaePessoas)

function receberQunatidaePessoas(evento){
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")
    
    
    
    if(evento.target.value === "0"){
        paragrafoErro.computedStyleMap.display = "block"
        divErro.setAttribute("id", "erro-div")
    }else {
        paragrafoErro.computedStyleMap.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }  

}

const botoesGorjeta = document.querySelector(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click",)
})

function receberPorcentagem(evento) {
