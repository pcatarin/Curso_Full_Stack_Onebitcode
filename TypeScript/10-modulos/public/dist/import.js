//importando bibliotecas de terceiros, primeiro instalamos a biblioteca pretendida depois importamos no arquivo
import * as lodash from "lodash";
let xwing = {
    name: "x-wing",
    weapons: 4,
    pilot: "Luke Skywalker",
    speed: 50
};
xwing.name;
let carrun = {
    pilot: "",
    type: "",
    speed: 0
};
carrun.pilot;
console.log(lodash.camelCase(xwing.name));
console.log(lodash.kebabCase(xwing.pilot));
