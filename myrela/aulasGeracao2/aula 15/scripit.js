let nome= prompt("Qual seu nome?")
let cidade= "";
let contagem= 0;

let continuar = prompt('Você visitou alguma cidade? sim/não');

while (continuar=="sim") { 
    let cidades = prompt('Quais cidades você visitou?');
    cidade += '-' + cidades + '\n'
    contagem ++
    continuar = prompt('Visitou mais alguma cidade? sim/não')
}
alert(`O turista ${nome} visitou ${contagem} cidades e as cidades foram ${cidade}`);