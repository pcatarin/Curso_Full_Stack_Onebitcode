//Diferença de types para interfaces

// type Planet = {
//     name: string;
//     satellities: string[];
// }

//As interfaces são mais usados para criação de objetos

interface CelestialBody {
    name: string;
    mass: number;
}

//Com as interfaces conseguimos herdar outra interface, possuindo assim suas caracteristicas

interface Star extends CelestialBody {
    age: number;
    planets: Planet[];
}

interface Planet extends CelestialBody {
    population: number;
    createSatellite: (name: string) => void
}

let sun:Star

sun.name = 'Sol'
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

//Os types podem herdar as interfaces mas de uma forma mas legivel se quisermos adicionar outras propriedades

type Asteroid = CelestialBody &{
    size: number
}

//Usando interfaces nas classes

class MilkWayPlanet implements Planet {
    population: number;
    name: string;
    mass: number;
    satellites: string[]

    constructor (name: string, mass: number, population: number, satellites: string[]) {
        this.name = name
        this.mass = mass
        this.population = population
        this.satellites = satellites
    }

    createSatellite (name: string) {
        //...
    };
}

//Usando o type não conseguimos adicionar novas propriedades pois ele reconhecera como duplicado, usando interface conseguimos adicionar novas propriedades/caracteristicas usando o mesmo nome

interface Planet {
    satellites: string[]
}