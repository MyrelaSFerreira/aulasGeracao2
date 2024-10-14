// let personagem= ['Frodo', 'Gendalf', 'Pippin', 'Arageon', 'Legolas',]

// // push: adiciona elementos no final do array
// personagem.push('Boromir');
// console.log(personagem)

// // unshift: adiciona elementos no inicio do array
// personagem.unshift('Sauron');
// console.log(personagem)

// // pop: retira o ultimo elemento do array
// personagem.pop('Boromir');
// console.log(personagem);

// // shift: retira o primeiro dado do array
// personagem.shift('Sauron');
// console.log(personagem);

// // includes: verifica se um certo elemento esta presente no array
// let procura = personagem.includes
// ('Gendalf');
// console.log(procura)

// // indexOf: procura indice do elemnto no array (posição)
// let procuraIndice = personagem.indexOf('Frodo');

// personagem[1] = 'Gandolf o Cinzento';

// console.log(procuraIndice);

// console.log(personagem)

// let selecaoPersonagem = personagem.slice
// ('0,4')
// console.log(selecaoPersonagem)

// let outraSelecao = personagem.slice
// (-4)
// console.log(personagem)
// console.log(outraSelecao)

// // concat: junta os arrays e os items e devolve um array sem alterar os arrays originais.
// let personagem2 =['Fheanor', 'Fingilfin']

// let arrayConcat = personagem.concat
// (personagem2)

// console.log(arrayConcat)

// // join: ele junta os elementos de acordo com o que a gente passa como argumento

// let juntarCom = personagem.join('-'); 

// console.log(juntarCom)

// let personagens = ['Frodo', 'Gendalf', 'Pippin', 'Aragon', 'Legolas'];

// console.log(personagens)

// for(let indice = 0; indice <personagens.length; indice ++){
//     let elemento = personagens[indice];
//     console.log(`O personagem ${elemento} esta no indice ${indice}`)
// }



// let fila = []
// let opcao = ""


// do { 
//     let juntarPaciente= fila.join("-");
//     opcao= prompt(`
//         \n Lista de Pacientes: ${juntarPaciente}
//         \n Escolha uma opção
//        \n1 - Novo paciente
//        \n2 - Consultar paciente
//        \n3 - Sair ...
//     `)
    
//     switch(opcao) {
//         case "1":
//             let novoPaciente = prompt(`Digite o nome do paciente`);
//             fila.push(novoPaciente)
//             break;
//         case"2":
//             let pacienteCons = fila.shift();
//             if(!pacienteCons){
//                 alert("Não existe pasciente na fila");
//             }else{
//                 alert(`O ${pacienteCons} foi consultado`)
//             }
//             break;
//         case"3":
//             alert(`Programa Encerrado`)
//             break;
//         defalt:
//             break;
//     }
    
    
// } while (opcao != "3"); 



