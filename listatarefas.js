//Crie uma lista de tarefas onde o usuário pode adicionar novas tarefas, marcá-las como concluídas e removê-las.


let containerLista = document.querySelector('#containerlista');


function adctarefa (){
    
    let novaTarefa = document.getElementById('inputtarefa').value
    if(novaTarefa !== ""){
    let novoElemento = document.createElement('li');
    novoElemento.classList.add('tarefa')
    novoElemento.innerText = novaTarefa;

    containerLista.appendChild(novoElemento);

    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "excluir";
    botaoExcluir.classList.add('btn-container');
    botaoExcluir.id = "botaoExcluir";
    botaoExcluir.addEventListener('click', excluir);
    novoElemento.appendChild(botaoExcluir);

    let botaoFeita = document.createElement("button");
    botaoFeita.innerHTML = "concluir";
    botaoFeita.classList.add('btn-container');
    botaoFeita.id = "botaoFeita";
    botaoFeita.addEventListener('click', concluir);
    novoElemento.appendChild(botaoFeita);

    document.getElementById('inputtarefa').value = "";
}   else{
    alert("Por favor, insira uma tarefa válida.")
}
}


function excluir(event){
    let listItem = event.target.parentNode;
    listItem.remove();

}

function concluir(event){
    let novaTarefa = event.target.parentNode;
    novaTarefa.style.textDecoration = "line-through";
}
