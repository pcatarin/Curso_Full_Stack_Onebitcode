let fila = []
let option = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i+1) + "º- " + fila[i] + "\n"
        
    }
    option = prompt('Pacientes:\n' + pacientes +
        '\nO que gostaria de fazer?'+
        '\n\n1) Adicionar paciente.' +
        '\n2) Remover paciente'+
        '\n3) Encerrar Programa'+
        '\n\nEscolha pelo número...'
    )

    switch (option) {
        case '1':
            let novoPaciente = prompt('Qual o nome do paciente?')
            fila.push(novoPaciente)
            break;
        case '2':
            let pacienteConsultado = fila.shift()
            if (!pacienteConsultado){
                alert('A fila está vazia!')
            } else {
                alert(pacienteConsultado + ' Entrou na consulta!')
            }
            break
        case '3':
            alert('Encerrando o Programa...')
            break
    
        default:
            alert('Opção inválida')
            break;
    }
} while (option !== "3")