const Character = require("./Character")

class Mage extends Character {
    constructor (name, pointsLife, pointsAtk, pointsDef, pointsMagic) {
        super (name, pointsLife, pointsAtk, pointsDef)
        this.pointsMagic = pointsMagic
    }

    atack (character) {
        this.pointsAtk += this.pointsMagic
        character.pointsLife = character.pointsLife-(this.pointsAtk - character.pointsDef)
    }

    restoreLife (character) {
        character.pointsLife += /*character.pointsLife +*/ (2 * this.pointsMagic)
    }
}

module.exports = Mage 