/*Objetos podem conter Arrays e outros objetos dentro de si*/
let pessoa = {

}

pessoa.nome = 'Paulo'
pessoa.idade = 41
pessoa.familia = ['Patricia','Guilherme']
pessoa.endereco = {
    rua: 'Rua Lamartine Humberto de Mello César',
    numero: 56,
    bairro: 'Loteamento Bardan'
}

console.log(pessoa)

alert(pessoa.nome)