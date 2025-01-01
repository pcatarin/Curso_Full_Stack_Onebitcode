function sendSpaceShip(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, ", comandada pelo capit\u00E3o ").concat(spaceship.captain, ", foi enviada em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Insira o Nome da nave a ser enviada.');
var spaceshipCaptain = prompt('Qual o nome do capitão da nave:');
var currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Qual velocidade deseja alcançar:'));
accelerate(speed, currentShip);
