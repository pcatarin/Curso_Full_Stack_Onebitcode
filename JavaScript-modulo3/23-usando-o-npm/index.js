const lodash = require("lodash")
//quando temos um pacote instalado, não precisamos referenciar o caminho completo, o próprio npm deixa os pacotes disponiveis a partir de seu nome.

console.log(lodash.isArray([]))
console.log(lodash.kebabCase('paulo rogerio catarin'))
//camelCase kebab-case