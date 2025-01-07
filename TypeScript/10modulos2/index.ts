import { SpaceShip } from "./spaceship";
import * as lodash from 'lodash';

interface BattleSpaceShip extends SpaceShip {
    weapons: number
}

let xwing :BattleSpaceShip = {
    name: "x-wing",
    weapons: 4,
    pilot: "Luke Skywalker",
    speed: 50
}

console.log(lodash.camelCase(xwing.name))
console.log(lodash.kebabCase(xwing.pilot))