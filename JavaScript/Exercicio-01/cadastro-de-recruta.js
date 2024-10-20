let nome = prompt('Informe o nome do recruta:')
let sobrenome = prompt('Informe o sobrenome do recruta:')
let campoDeEstudo = prompt('Informe o campo de estudo do recruta:')
let entrada = prompt('Qual seu ano de nascimento:')

let nascimento = parseFloat(entrada)

alert('Recruta cadastrado com sucesso!\n'+
    '\nNome:'+' '+ nome + ' ' + sobrenome +
    '\nCampo de Estudo:' + ' ' + campoDeEstudo +
    '\nIdade:'+ ' ' + (2024 - nascimento)
)