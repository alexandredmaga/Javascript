function exibirAsterisco(linhas) {

    let asterisco = '*'

    for (i = 0; i < linhas; i++) {
        console.log(asterisco)
        asterisco += '*'
    }
}

function outraForma(linhas) {

    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = ''
        for (i = 0; i < linha; i++) {
            padrao += '*'

        }
        console.log(padrao)
    }


}

console.log(outraForma(10))