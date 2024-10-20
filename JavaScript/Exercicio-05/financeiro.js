let money = parseFloat(prompt('Quanto dinheiro você possui?'))

let opcoes = prompt('Você possui: '+ ' '+ money+ '\n' +
    '\nO que você gostaria de fazer?' +
    '\n1) Adicionar Dinheiro' +
    '\n2) Retirar Dinheiro' +
    '\n3) Encerrar o Programa'
)

do {
    opcoes = prompt('Você possui: '+ ' '+ money+ '\n' +
        '\nO que você gostaria de fazer?' +
        '\n\n1) Adicionar Dinheiro' +
        '\n2) Retirar Dinheiro' +
        '\n3) Encerrar o Programa' +
        '\n\n Escolha pelo numéro...'
    )
    switch (opcoes) {
        case '1':
            let addMoney = parseFloat(prompt('Gostaria de Adicionar Quanto?'))
            money += addMoney
            break
        case '2':
            let remMoney = parseFloat(prompt('Gostaria de Tirar Quanto?'))
            money -= remMoney
            break
        case '3':
            alert('Encerrando o Programa...')
            break
        default:
            alert('Opção Inválida...')
    }

} while (opcoes !== '3')