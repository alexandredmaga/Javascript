const endereco = {
    rua: 'Galiléia',
    cidade: 'Januária',
    cep: 394800
}

function exibirEndereco(endereco) {
    for (let key in endereco)
        console.log(key, endereco[key]);
}

exibirEndereco(endereco);