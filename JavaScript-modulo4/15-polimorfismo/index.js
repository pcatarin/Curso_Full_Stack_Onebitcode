class Veichle {
    move () {
        console.log('O veiculo esta se movendo!');
    };
};

class Car extends Veichle {
    move () {
        console.log('O carro esta se movendo!');
    };
}

class Bike extends Veichle {
    move () {
        console.log('A bicicleta esta se movendo!');
    };
}

class Ship extends Veichle {
    move () {
        console.log('O Barco esta navegando!');
    };
}

class Plane extends Veichle {
    move () {
        console.log('O avião esta voando!');
    };
}

const deLorean = new Car()
const chuk = new Bike()
const airCraft = new Plane()
const nav = new Ship()
/*
deLorean.move()
chuk.move()
airCraft.move()
nav.move()
*/
function moves (veichle) {
    console.log('Iniciando um veiculo...')
    veichle.move()
}

moves(deLorean)
moves(chuk)
moves(airCraft)
moves(nav)