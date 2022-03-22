const numeros = [2, 9, 5]

//Inicio
console.log(numeros);
numeros.unshift(0);
console.log(numeros);
//Meio
numeros.splice(1, 0, 'a');
console.log(numeros);
//Final
numeros.push(10);
console.log(numeros);
