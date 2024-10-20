const imoveis = []
let opcao = ""

do {
    opcao = prompt('Bem Vindo ao Cadastro de Imóveis:\n' + 
        '\nQuantidade de Imóveis: ' + imoveis.length + '\n'+
        '\n1. Cadastrar Imóvel.'+
        '\n2. Listar Imóveis.'+
        '\n3. Sair.'+ '\n'+
        '\nEscolha pelo número...'
    )

    switch (opcao) {
        case "1":
            let imovel = {}
            imovel.proprietario = prompt('Informe o Nome do Propritário:')
            imovel.quartos = parseFloat(prompt('Quantos quartos possui?'))
            imovel.banheiros = parseFloat(prompt('Quantos banheiros possui?'))
            imovel.garagem = prompt('Possui Garagem? (Sim/Não)')

            const confirma = confirm('Deseja salvar o Imóvel? \n' +
                '\nProprietário: ' + imovel.proprietario + 
                '\nQuartos: ' + imovel.quartos +
                '\nBanheiros: ' + imovel.banheiros +
                '\nGaragem: ' + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert('Imóvel: ' + (i + 1) +
                '\nProprietário: ' + imoveis[i].proprietario + 
                '\nQuartos: '+ imoveis[i].quartos +
                '\nBanheiros: '+ imoveis[i].banheiros +
                '\nGaragem: '+ imoveis[i].garagem)
            }

           

            break
        case "3":
            alert('Encerrando...')
            break
        default:
            alert('Opcão Inválida...')

    }

} while (opcao !== "3")