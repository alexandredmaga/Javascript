
function Construtor(titulo, mensagem, autor) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizualizacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = false
}
let objeto1 = new Construtor('Titulo', 'Olá', 'Alexandre')

console.log(objeto1);