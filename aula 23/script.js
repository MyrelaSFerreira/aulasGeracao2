// const url = 'https://dog.ceo/api/breeds/image/random'

// const dogImg = document.getElementById('dogImg')

// // Função para buscar os Dogs na API
// function fetchDogs () {
// fetch (url)
//     .then (response => response.json())
//     .then ((dogData) => {
//         const dogUrl = dogData.message;
//         displayDog(dogUrl);
//     })
//     .catch(error => console.log('Erro ao buscar o doguinho:', error));
// }

// // console.log(fetch())

// // Função para preencher o HTML com a imagem do dog
// function displayDog(dogUrl) {
//     dogImg.src = dogUrl;
// }

async function fetchCep() {
    let cep = document.getElementById('cep').value
    const url = "https://viacep.com.br/ws/"+cep+"/json/"

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

    async function listarCep(){
        if (document.getElementById('cep').value.length > 7){
            const lista = await fetchCep();
            console.log(lista.erro)
            if(!lista.erro){
                document.getElementById('logradouro').value =lista.logradouro
                document.getElementById('bairro').value =lista.bairro
                document.getElementById('localidade').value =lista.localidade 
                document.getElementById('uf').value =lista.uf
            }
            else {
                document.getElementById('cep-error').innerHTML = "Digite um Cep Válido!"
            }
        }
        else{
            document.getElementById('cep-error').innerHTML = ""
        }
    };
    
function busca(){
    listarCep()
}
