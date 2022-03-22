// Encontrando elementos do tipo primitivo
const numeros = [1, 7, 3, 4];
console.log(numeros.indexOf(4))

const numeros2 = [1, 2, 3, 1, 4];
console.log(numeros2.lastIndexOf(1))

console.log(numeros.includes(2))

// Encontrando elementos do tipo referência

const array = [
    { id: 1, nome: 'Fernando' },
    { id: 2, nome: 'Jorge' }
];

// utilizando arrow function

let nomes = array.find(array => array.nome === 'Fernando')

console.log(nomes)