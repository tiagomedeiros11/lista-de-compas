const form = document.querySelector("#novoItem"); 
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens") || []); // Busca o histórico do localStore que estão dentro do array


itens.forEach((elemento) =>{
  console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = event.target.elements["nome"];
  const quantidade = event.target.elements["quantidade"];
  criaElemento(
    nome.value,
    quantidade.value,
  );
  nome.value = "";
  quantidade.value = "";
});



// função que adiciona um novo item a lista
function criaElemento(nome, quantidade) {

  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const quantidadeItem = document.createElement("strong");
  quantidadeItem.innerHTML = quantidade;

  novoItem.appendChild(quantidadeItem);
  novoItem.innerHTML += nome

  lista.appendChild(novoItem)

  const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
  }

      itens.push(itemAtual)

  localStorage.setItem("itens", JSON.stringify(itens))
  
}


