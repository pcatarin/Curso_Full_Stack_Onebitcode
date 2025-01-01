let options;
options = 'Maybe'; //dessa maneira pode assumir qualquer dos valores
let planet;
let homePlanet;
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log('Estamos na Terra');
        alert('Estamos na Terra');
    }
    else {
        alert(`Estamos em ${planet}`);
    }
}
function greet(callBackfn) {
    let name = 'Paulo';
    callBackfn(name);
}
