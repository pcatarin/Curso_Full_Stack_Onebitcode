const Author = require("./Author")

const paulo = new Author("Paulo")

const post = paulo.writePost("Titulo do Post", "Lorem Ipsum in dollor, gite kille...")

post.addComent("Isaac", "Muito Bom")
post.addComent("Lucas", "Muito interessante")

console.log(paulo)
console.log(post)