const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Lamartine Humberto", 56, "Loteamento Bardan", "Taubaté", "SP")

//fazendo associação diretamente dentro de person teriamos que colocar as informações de Address
//diretamente dentro de person e excluir o addr
const paulo = new Person("Paulo", addr /*"Lamartine Humberto", 56, "Loteamento Bardan", "Taubaté", "SP"*/)

console.log(paulo)
console.log(addr)
console.log(paulo.address.fullAddress())