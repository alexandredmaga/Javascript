let array = [6, 3, 4];
let array1 = [7, 5, 2];

//Combinar array (concat)
const combinado = array.concat(array1);
console.log(combinado)

//Dividir

const cortar = combinado.slice(1, 4);
console.log(cortar);

//spread

const spread = [...array, 'Alexandre', ...array1];
console.log(spread);
