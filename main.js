const form = document.querySelector('#novoItem')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event)
    criaElemento(event.target.elements["nome"].value , event.target.elements["quantidade"].value )
})

function criaElemento (nome, quantidade) {
    console.log(nome)
    console.log(quantidade)
}