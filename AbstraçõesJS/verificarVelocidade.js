function verificarVelocidade(velocidade) {

    const velocidadeMax = 70;

    if (velocidade <= velocidadeMax) {
        console.log('OK')
    } else {
        let pontos = 0;
        contador = 0;
        for (i = velocidadeMax; i < velocidade; i++) {
            contador++;
            if (contador === 5) {
                pontos++;
                contador = 0;
            }
        }

        if (pontos >= 12)
            console.log('Carteira Suspensa');

        console.log('Pontos: ', pontos);


    }
}

console.log(verificarVelocidade(129))