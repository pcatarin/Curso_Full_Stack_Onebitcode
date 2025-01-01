function sendSpaceShip (name:string, captain:string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name}, comandada pelo capitão ${spaceship.captain}, foi enviada em uma missão.`)

    return spaceship
}

function accelerate (targetSpeed:number, spaceship: { name:string, speed:number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }
}

const spaceshipName = prompt('Insira o Nome da nave a ser enviada.')
const spaceshipCaptain = prompt('Qual o nome do capitão da nave:')

const currentShip = sendSpaceShip(spaceshipName,spaceshipCaptain)

const speed = Number(prompt('Qual velocidade deseja alcançar:'))

accelerate(speed, currentShip)

 