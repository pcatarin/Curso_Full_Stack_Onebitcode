//Diferença de types para interfaces
let sun;
sun.name = 'Sol';
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];
//Usando interfaces nas classes
class MilkWayPlanet {
    population;
    name;
    mass;
    satellites;
    constructor(name, mass, population, satellites) {
        this.name = name;
        this.mass = mass;
        this.population = population;
        this.satellites = satellites;
    }
    createSatellite(name) {
        //...
    }
    ;
}
