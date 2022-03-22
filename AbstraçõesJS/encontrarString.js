
let people = { nome: 'Alexandre', idade: 22, estadoCivil: 'solteiro', profissao: 'frontend developer' }

console.log(encontrarString(people))

function encontrarString(objeto) {


    for (let pessoas in objeto) {
        if (typeof objeto[pessoas] === 'string')
            console.log(pessoas + '-' + objeto[pessoas])
    }
}