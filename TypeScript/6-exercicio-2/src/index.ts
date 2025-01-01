const planets = []

type Situation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"

function addPlanet ( name: string, coordenates: [number,number,number,number], situation: Situation, satelities: []) {
    const planet = {
        name,
        coordenates,
        situation,
        satelities
    }

    planets.push(planet)
    alert(`O planeta ${planet.name} foi registrado.`)
    return planet
}

function findPlanet (name:string) {
    let planet: {
        name: string,
        coordenates: [number, number, number, number],
        situation: Situation,
        satelities: []
    }

    planet = planets.find((p) => {
        return p.name === name
    })

    return planet
}

document.querySelector('.planet-info').addEventListener('submit', (event) =>{
    event.preventDefault()

    const name = document.querySelector('#name').value
    const coordenate1 = Number(document.querySelector('#coordenate-1').value)
    const coordenate2 = Number(document.querySelector('#coordenate-2').value)
    const coordenate3 = Number(document.querySelector('#coordenate-3').value)
    const coordenate4 = Number(document.querySelector('#coordenate-4').value)
    const option = document.querySelector('#situation')
    const situation = option.options[option.selectedIndex].textContent
    const satelitiesValue = document.querySelector('#satelities').value
    const satelitiesAll = satelitiesValue.split(',')
    const satelities = [satelitiesAll]
    
    addPlanet(name, [coordenate1,coordenate2,coordenate3,coordenate4], situation, satelities)

    event.target.reset()
    return planets
    
    
})

console.log(planets)