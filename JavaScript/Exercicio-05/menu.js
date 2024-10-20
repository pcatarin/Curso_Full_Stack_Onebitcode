let opcoes = ""


do {
    opcoes = prompt('Escolha uma das opções: \n' + 
        '\na) Programa de Cadastro.' + 
        '\nb) Programa de Controle Financeiro.' +
        '\nc) Programa de Conversão de Medidas.' +
        '\nd) Programa de Turismo.' +
        '\ne) Encerrar.' +
        '\n\n Escolha pelo numero'
    )

    switch (opcoes) {
        case 'a':
            alert('Você entrou no programa de cadastro')
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
            break
        case 'b':
            alert('Você entrou no programa de Controle Financeiro.')
            let money = parseFloat(prompt('Quanto dinheiro você possui?'))

            let opcoes = ""

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
            break
        case 'c':
            alert('Conversor de Medidas.')
            let value = parseFloat(prompt('Qual o valor em métros:'))

            const conversion = prompt('Para qual unidade de medida você gostaria de converter:\n\na) milímetro (mm)\nb) centímetro (cm)\nc) decímetro (dm)\nd) decâmetro (dam)\ne) hectômetro (hm)\nf) quilômetro (km)\n\n Escolha pela Letra.')

            switch (conversion) {
                case 'a':
                    value *= 1000
                    alert('O valor em Mílimetros é:'+' '+value)
                    break
                case 'b':
                    value *= 100
                    alert('O valor em Centímetros é:'+' '+value)
                    break
                case 'c':
                    value *= 10
                    alert('O valor em Decímetros é:'+' '+value)
                    break
                case 'd':
                    value /= 10
                    alert('O valor em Decâmetros é:'+' '+value)
                    break
                case 'e':
                    value /= 100
                    alert('O valor em Hectômetros é:'+' '+value)
                    break
                case 'f':
                    value /= 1000
                    alert('O valor em Quilômetros é:'+' '+value)
                    break
                default:
                    alert('Opção Inválida...')
            }
            break
        case 'd':
            alert('Você escolheu turismo.')
            const turist = prompt('Como você se chama?')
            let city = ""
            let numberCitys = 0
            let visit = prompt(turist + ' ' + 'você já visitou alguma cidade?')

            while (visit === 'sim') {
                city +=  '\n-'+ prompt('Qual o nome da cidade?')
                numberCitys++
                visit = prompt(turist + ' ' + 'já visitou alguma outra cidade?')
            }

            alert('O turista ' + turist + ' já visitou: ' + numberCitys + ' Cidades.' + 
                '\n' + city
            )
            break
        case 'e':
            alert('Encerrando o Programa...')
            break
        default:
            alert('Opção inválida...')
    }

   
 } while (opcoes !== 'e') 
    
    
        
