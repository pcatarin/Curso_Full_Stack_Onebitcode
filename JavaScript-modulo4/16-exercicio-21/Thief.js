const Character = require("./Character")

class Thief extends Character {
    constructor (name, pointsLife, pointsAtk, pointsDef) {
        super (name, pointsLife, pointsAtk, pointsDef)
    }

    atack (character) {
        character.pointsLife -= /*character.life-*/((2*this.pointsAtk)-character.pointsDef)
    }
}

module.exports = Thief
