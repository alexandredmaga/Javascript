let faixas = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de 700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999 },
]

//Segunda opção (Factory Function)

function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 100000)
]

//terceira opção (Construtor function)

let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('f', 20, 30),
    new FaixaPreco('g', 30, 40),
]

function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
}

console.log(faixas)
console.log(faixas2)
console.log(faixas3)