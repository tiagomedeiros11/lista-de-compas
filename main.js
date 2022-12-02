
const form = document.querySelector("#novoItem"); 
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []; // Itens que são adicionados com nome e quantidade


itens.forEach((elemento) =>{
  criaElemento(elemento)
})

//Evento para pausar o padrão de envio das informações do formulario e adicionar os dados de nome e quantidade que o usuario inserir, salvando no localStorage os itens ja adicionados.
form.addEventListener("submit", (event) => {
  event.preventDefault();
 
  const nome = event.target.elements["nome"];
  const quantidade = event.target.elements["quantidade"];

  const existe = itens.find(elemento => elemento.nome === nome.value)
  
  const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
  }

  if (existe){
      itemAtual.id = existe.id
      atualizaElemento(itemAtual)
      itens[existe.id] = itemAtual // quando o item ja existir, ele irá sobrescrever a informação no localStorage

    }else{
      itemAtual.id = itens.length

      criaElemento(itemAtual);
      
      itens.push(itemAtual)
    }
 
  localStorage.setItem("itens", JSON.stringify(itens))
 
  
  nome.value = "";
  quantidade.value = "";
});

// função que adiciona um novo item a lista e salva no localStorage
function criaElemento(item) {

  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const quantidadeItem = document.createElement("strong");
  quantidadeItem.innerHTML = item.quantidade;
  quantidadeItem.dataset.id = item.id

  novoItem.appendChild(quantidadeItem);
  novoItem.innerHTML += item.nome

  lista.appendChild(novoItem)
}


//atualiza a quantidade do item, incrementando o id do data-id, para controlar se o item ja foi adicionado a lista
function atualizaElemento (item){
document.querySelector("[data-id='"+item.id+"']").innerHTML =item.quantidade
}
