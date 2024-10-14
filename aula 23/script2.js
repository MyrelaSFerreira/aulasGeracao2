// Função que busca uma imagem aleatória de cachorro
async function fetchDogImg() {
   
    // Usando o fetch para fazer a requisição para a API
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    // Verificando se a resposta foi bem-sucedida
    
    }
    // Convertendo a resposta para JSON
    const data = await response.json();
    // Preenchendo o src da imagem com o link retornado pela API
    document.getElementById('dogImg').src = data.message;
