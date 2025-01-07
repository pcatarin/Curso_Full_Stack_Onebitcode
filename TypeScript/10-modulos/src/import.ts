//é preferivel usarmos dessa maneira pois assim mantemos o nome real do export e assim saibamos com o que estamos trabalhando
import { SpaceShip } from "./export";

//se colocarmos o default no export, não precisamos das chaves e podemos usar outro nome no export
import C from "./export";

//importando bibliotecas de terceiros, primeiro instalamos a biblioteca pretendida depois importamos no arquivo
import * as lodash from "lodash"

interface BattleSpaceShip extends SpaceShip {
    weapons: number
}

interface RunningCar extends C {
    pilot: string
}

let xwing :BattleSpaceShip = {
    name: "x-wing",
    weapons: 4,
    pilot: "Luke Skywalker",
    speed: 50
}

xwing.name

let carrun: RunningCar = {
    pilot: "",
    type: "",
    speed: 0
}

carrun.pilot

console.log(lodash.camelCase(xwing.name))
console.log(lodash.kebabCase(xwing.pilot))
