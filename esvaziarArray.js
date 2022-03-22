let array = [9, 8, 7, 6, 5, 4];
let array1 = [9, 8, 7, 6, 5, 4];
let array2 = [9, 8, 7, 6, 5, 4];

// Forma
array = [];
console.log(array);

//Segunda Forma

array1.length = 0;
console.log(array1);

//Terceira Forma

array2.splice(0, array2.length);
console.log(array2);
