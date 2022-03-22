
console.log(outraForma(10))

function numerosPrimos(limite) {

    console.time("for")
    for (i = 0; i <= limite; i++) {
        let contador = 0;
        for (let j = 0; j <= limite; j++) {
            if (i % j === 0) {
                contador++;
            }

        }

        if (contador === 2) console.log(i + ' É primo');
    }

    console.timeEnd("for")
}


function outraForma(limite) {

    for (let numero = 2; numero <= limite; numero++) {
        if (numeroPrimo(numero)) console.log(`${numero}  é primo!!`)
    }

}

function numeroPrimo(numero) {



    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor === 0) {
            return false;

        }

    }
    return true;
}