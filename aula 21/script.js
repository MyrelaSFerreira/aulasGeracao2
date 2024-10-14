// https://randomuser.me/api/

// let users = [];

// const cardContainer = document.getElementById('user-cards')

// function fetchUsers () {
// fetch('https://randomuser.me/api/?results=5')
// .then( response => response.json())
// .then(data => {
//         // console.log(data.results[1].phone)
//         users = data.results
//         displayUsers(users)
//     });
// }

// function displayUsers(users) {

//     let cards = '';

//     users.forEach(users => {
//         cards += `

//         <div class="card m-3" style="width: 18rem;">
//         <img src="${users.picture.large}" class="card-img-top rounded-circle" alt="...">
//         <div class="card-body">
//         <h5 class="card-name">${users.name.first}</h5>
//         <p class="card-text"><strong>Email:</strong> ${users.email}</p>
//         <p class="card-text"><strong>Phone:</strong> ${users.phone}</p>
//         <a href="#" class="btn btn-primary"> Contact </a>
//         </div>
//         </div>

//         `
//     });

//     cardContainer.innerHTML = cards;
// }


// fetchUsers();


  // Função para buscar um único usuário da API
  function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0]; // Pega o primeiro usuário do resultado
            displayUser(user); // Chama a função para preencher o card
        })
        .catch(error => console.log('Erro ao buscar usuário:', error));
}

// Função para preencher os campos com os dados do usuário
function displayUser(user) {
    document.getElementById('user-img').src = user.picture.large;
    document.getElementById('user-img').alt = `Foto de ${user.name.first}`;
    document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-phone').textContent = user.phone;
    document.getElementById('user-country').textContent = user.location.country;
}

// Chama a função ao carregar a página
window.onload = fetchUser;
