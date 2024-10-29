//Vamos imaginar que nós temos uma aplicação que possui várias funcionalidades diferentes, como ilustrado pelo código abaixo:
const render = require("./render")
const store = require("./store")
/*
function render() {
  console.log('Renderizando a interface da aplicação...')
}

function store() {
  console.log("Salvando as informações no banco de dados...")
}
*/
console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")

//Vamos dividir essa aplicação em módulos usando o CommonJS: