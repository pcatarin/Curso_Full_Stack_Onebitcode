//Primeiramente criamos os tipos para o que queremos
//A criação dos tipos nos ajudam a construir um objeto, ou array para que assim na criação de novos, não precisemos ficar detalhando ou repetindo o mesmo código sempre, só especificamos o tipo que criamos no inicio.

type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inesplorado'

type PlanetCoordenates = [number, number, number, number]

type Planet = {
    name: string,
    coordenates: PlanetCoordenates,
    situation: PlanetSituation,
    satellities: string[]
}

const planets: Planet[] = []

//Agora começamos a criar as funções

//Primeira para salvar um novo planeta 

function addPlanet (name: string, coordenates: PlanetCoordenates, situation: PlanetSituation) {
    planets.push({
        name,
        coordenates,
        situation,
        satellities: []
    })

    alert(`O planeta ${name} foi registrado.`)
}

//Segunda procurar um planeta no array

function findPlanet (name: string) {
    const planet = planets.find (planet => planet.name === name)

    return planet ?? false//verificador para caso não encontre o planeta no array
}

//Terceira, atualiza a situação do planeta

function updateSituation (situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)
}

//Quarta, Adicionar satelites ao planeta

function addSatellite (name: string, planet: Planet) {
    planet.satellities.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

//Quinta, Remover satélites de um planeta

function removeSatellite (name: string, planet: Planet) {
    planet.satellities = planet.satellities.filter(satellite => satellite !== name)

    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`)
}

//A partir deste ponto começaremos a fazer funções para criação do menu para interação do usuário
//as funções auxiliares servem para chamar as funções principais por isso não precisam de parâmetros

//Primeira para pedir uma situação válida do planeta

function promptValidSituation () {
    let situation: PlanetSituation
    let validSituation = false

    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta:\n 1- Habitado\n 2- Habitável\n 3- Inabitável\n 4- Inesplorado')

        switch (situationInput) {
            case '1':
                situation = 'Habitado'
                validSituation = true
                break;

            case '2':
                situation = 'Habitável'
                validSituation = true
                break;

            case '3':
                situation = 'Inabitável'
                validSituation = true
                break;

            case '4':
                situation = 'Inesplorado'
                validSituation = true
                break;

            default:
                alert('Opção Inválida!')
                break;
        }
    }

    return situation
}

//Proxima função pedir um planeta válido
//Nesta vamos utilizar uma função de callback nos parametros para um planeta valido
//Ela recebe um planeta valido e assim conseguimos vizualizar o planeta válido na função  e retorna vazio

function pomptValidPlanet (callbackfn: (planet: Planet) => void) {
    const planetName = prompt('Informe o nome do planeta:')
    const planet = findPlanet(planetName)

    if (planet) {
        callbackfn(planet)//aqui usamos a função de callback do parametro para retornar o planeta
    } else {
        alert('Planeta não encontrado! Retornando ao menu...')
    }
}

//Proxima função realizar a criação do menu propriamente dito

function firstMenuOption () {
    const name = prompt('Informe o nome do planeta:')
    const coordinateA = Number(prompt('Informe a primeira coordenada:'))
    const coordinateB = Number(prompt('Informe a segunda coordenada:'))
    const coordinateC = Number(prompt('Informe a terceira coordenada:'))
    const coordinateD = Number(prompt('Informe a quarta coordenada:'))

    // Aqui a nossa função ajuda a ter um código mais organizado
    const situation = promptValidSituation()

    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`)

    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
    }
}

// Nessas três funções vemos como a nossa função de callback
// proporciona uma facilidade enorme na implementação
function secondMenuOption() {
    // Além disso temos acesso automático às informações
    // dos argumentos, nesse caso a variável planet
    pomptValidPlanet(planet => {
      const situation = promptValidSituation()
      updateSituation(situation, planet)
    })
  }
  
  function thirdMenuOption() {
    pomptValidPlanet(planet => {
      const satellite = prompt('Informe o nome do satélite a ser adicionado:')
      addSatellite(satellite, planet)
    })
  }
  
  function fourthMenuOption() {
    pomptValidPlanet(planet => {
      const satellite = prompt('Informe o nome do satélite a ser removido:')
      removeSatellite(satellite, planet)
    })
  }

  function fifthMenuOption() {
    let list = 'Planetas:\n'
  
    planets.forEach(planet => {
      // Repare que as tuplas são uma forma fácil de permitir a
      // desestruturação com qualquer nome nas variáveis.
      // As variáveis a seguir podem ter qualquer nome pois a
      // tupla segue um padrão fixo.
      const [a, b, c, d] = planet.coordenates
  
      list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Satélites: ${planet.satellities.length}
      `
  
      planet.satellities.forEach(satellite => {
        list += `    - ${satellite}\n`
      })
    })
  
    alert(list)
  }

  // Menu

let userOption = 0

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
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
      fifthMenuOption()
      break
    case 6:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}
