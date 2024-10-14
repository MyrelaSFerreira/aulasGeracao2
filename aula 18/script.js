// DOCUMENT OBJECT MODEL

// Conseguir tratar o documento como se fosse um objeto

// Manipular melhor os elemntos da TextTrackList


// Uma forma de selecionar o elemento pelo ID
// NodeList

// let conteudo = document.getElementById('card');
// let paragrafo = document.getElementsByTagName('p')
// let selecionar = document.getElementsByClassName('cardSection')
// let navegacao = document.querySelector('#menu')
// let menu = document.querySelectorAll('conteudoMenu > a')
// let cabecalho= document.getElementById('header')
// let conteudoSection = document.getElementById('conteudoNovo')

// console.log(conteudo)
// console.log(paragrafo)
// console.log(typeof conteudo)

// console.log(selecionar)

// console.log(navegacao)
// console.log(typeof navegacao)

// console.log(menu);

// menu.forEach((item) => {
//     console.log(item)
// });


// function show(){
//     alert(`Você clicou no botão`);cabecalho.classList.add('novoCard') 
// }

// function cardVermelho(){
//     conteudoSection.innerHTML= 
//     `     
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea esse in dolorem exercitationem vel tempore, ad, ab maxime similique sunt cumque amet odit repellendus iure quod velit, aliquam suscipit sed.
        
//         `;
// }

// conteudoSection.classList.add('cardVermelho') 


let header = document.getElementById('conteudoheader');

function criarMenu(){`
    header.innerHTML = 
   
    <img src="kitty.jpg" alt="">

    <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </nav>
    
    `;
    header.classList.add('cardPrincipal');

}
