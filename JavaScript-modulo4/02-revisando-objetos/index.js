/*Os objetos podem receber propriedades com valores em string, numbers ou booleanos...
Podem receber arrays, outros objetos e métodos, que são funções para realizar uma ação dentro do objeto. 


const user = { 
    name: "Paulo",
    age: 42,
    adult: true,
    family: ["Patricia","Guilherme"],
    conjugue: {
        name: "Patricia",
        age: 41,
        adult: true
    },
    soon: {
        name: "Guilherme",
        age: 15,
        adult: false
    }
}
 */
/*
const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy" , "adventure" , "medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addOnStock(quantity) {
    //O 'this' é usado para referenciar a um atributo do proprio objeto
        this.inStock += quantity
    },
    save: function () {
        //salva no banco de dados
    }
}

console.log(book)

book.addOnStock(50)
console.log(book.inStock)
//Atribuir Função
book.remove = function () {}
console.log(book)
//Atribuir propriedade
book.height = 2
console.log(book)
*/

//Criar uma função construtora
function Book (title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function () {
        //salva no banco de dados
    }
}
const author = {name: "Christopher Paolini"}
const tags = ["fantasy" , "adventure" , "medieval"]
//Com a função construtora criada, podemos adicionar livros diferentes no objeto como abaixo
//O método 'new' chama a função construtora
const eragon = new Book("Eragon", 468, tags, author)
const harryPotter = new Book("Harry Potter e a pedra filosofal", 980, tags, author)

console.log(Book)

 