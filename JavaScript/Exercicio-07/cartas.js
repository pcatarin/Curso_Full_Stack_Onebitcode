let cartas = ["10 de ouro","5 de copas","Valete de paus","Rei de copas","9 de espada"]

let opcoes = ""

do{
    opcoes = prompt('Cartas na pilha: ' + cartas.length + '\n'+
        '\nO que gostaria de fazer:' + 
        '\n\n1) Puxar Carta' +
        '\n2) Colocar carta na pilha'+
        '\n3) Sair'+
        '\nEscolha pelo numero'
    )

    let novaCarta = ""

    switch (opcoes) {
        case '1':
            let cartaRetirada = cartas.pop()
            if (!cartaRetirada) {
                alert('A pilha esta vazia!')
            } else {
                alert('Você pegou a carta: ' + cartaRetirada)
            }
            break
        case '2':
            novaCarta = prompt('Qual carta esta sendo colocada?')
            cartas.push(novaCarta)
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção inválida...')
    }
} while (opcoes !== "3")