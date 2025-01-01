const crew : string [] = []

const spaceShipGroup : [] = []

function addSpaceShip (name:string, pilot:string, crewLimit:number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission:false
    }

    spaceShipGroup.push(spaceship)

    alert(`A nave ${spaceship.name}, foi registrada.`)
}
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/

function findSpaceShip (name:string) {
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission:boolean
    }

    spaceship = spaceShipGroup.find((ship) => {
        return ship.name === name
    })

    return spaceship
}
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
function addCrewMember (member: string, spaceship: { name:string, crewLimit:number, crew: string[] }) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O ${member}, não pode ser adicionado, a nave atingiu seu limite!`)
    } else {
        spaceship.crew.push(member)

        alert(`Bem vindo à ${spaceship.name}, ${member}.`)
    }
}
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
function sendInMission (spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean}) {
    if (spaceship.inMission) {
        alert(`A nave ${spaceship.name}, já está em missão.`)
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`Tripulação da ${spaceship.name}, está com poucos membros para missão!`)
    } else {
        spaceship.inMission = true

        alert(`${spaceship.name}, foi enviada em missão.`)
    }
}
/***********************************************************************************************/
/***********************************************************************************************/
/***********************************************************************************************/
function firstMenuOption () {
    const name = prompt('Qual o nome da nave a ser registrada:')
    const pilot = prompt(`Qual o nome do piloto da ${name}:`)
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} terá:`))

    const confirmation = confirm(`Confirma o registro da ${name}\n Piloto ${pilot}\n para ${crewLimit} tripulantes?`)

    if (confirmation) {
        addSpaceShip(name, pilot, crewLimit)
    } 
}

function secondMenuOption () {
    const member = prompt('Qual o nome do membro a ser registrado:')
    const spaceShipName = prompt(`Para qual nave o ${member} entrará:`)

    const spaceship = findSpaceShip(spaceShipName)

    if (spaceship) {
        const confirmation = confirm(`Confirma o registro de ${member}\n na tripulação da ${spaceship.name}?`)

        if (confirmation) {
            addCrewMember(member,spaceship)
        }
    } 
}

function thirdMenuOption () {
    const spaceShipName = prompt(`Qual o nome da nave a ser enviada?`)

    const spaceship = findSpaceShip(spaceShipName)

    if (spaceship) {
        const confirmation = confirm(`Gostaria de enviar a ${spaceship.name} em missão?`)
        if (confirmation) {
            sendInMission(spaceship)
        }
    }
}

function fourthMenuOption () {
    let list = 'Naves Registradas:\n'

  spaceShipGroup.forEach((spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
  }) => {
    list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `

    spaceship.crew.forEach(member => {
      list += `    - ${member}\n`
    })

  })

  alert(list)
}

/**
 * Menu
 */

let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}




