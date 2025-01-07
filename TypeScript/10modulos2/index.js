"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var xwing = {
    name: "x-wing",
    weapons: 4,
    pilot: "Luke Skywalker",
    speed: 50
};
console.log(lodash.camelCase(xwing.name));
console.log(lodash.kebabCase(xwing.pilot));
