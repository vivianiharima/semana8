//Exercício1 - selecione um elemento de uma página HTML pelo seu ID e altere sua cor de fundo.
let titulo = document.querySelector('#title');
titulo.style.color = 'cyan';



//Exercício 2 - Selecione todos os elementos de uma página HTML por sua classe e altere o texto desses elementos.
let botao = document.getElementsByClassName('btn');

for (let i = 0; i < botao.length; i++) {
    botao[i].innerText = "Clique aqui";
}




//Exercício 3 - Crie um novo elemento e adicione-o como filho de outro elemento na página HTML.
let div1 = document.querySelector('#div1');
let paragrafoDiv = document.createElement('p');
paragrafoDiv.appendChild(document.createTextNode('Para mudar:'));
div1.appendChild(paragrafoDiv);



//Exercício 4 - Remova um elemento filho de um elemento pai na página HTML.
let elemento1 = document.querySelector('#div1 p')
div1.removeChild(elemento1);




// Exercício 5 - Altere o estilo de todos os elementos de uma página HTML que tenham uma determinada classe.
for (let i = 0; i < botao.length; i++) {
botao[i].style.backgroundColor = 'cyan';
botao[i].style.borderRadius = '10px';
}



//Exercício 6 - Adicione uma nova classe a um elemento específico na página HTML.
div1.setAttribute('class', 'titulo')




//Exercício 7 - Remova uma classe de um elemento específico na página HTML.
let lista1 = document.getElementById("elementoTeste1")
lista1.removeAttribute('class');



//Exercício 8 - Adicione um novo atributo a um elemento na página HTML.
let span = document.querySelector('span');
span.setAttribute('id', 'span5');
console.log(span)


//Exercício 9 - Remova um atributo de um elemento na página HTML.
let divFantasma = document.getElementById('Fantasma');
divFantasma.removeAttribute('href')
console.log(divFantasma)



