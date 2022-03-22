function imparOuPar(quantidade) {

    for (i = 0; i <= quantidade; i++) {
        if (i % 2 === 0)
            console.log(i, '"PAR"')
        else
            console.log(i, '"IMPAR"')
    }
}

console.log(imparOuPar(5))