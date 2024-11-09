const Character = require("./Character")

module.exports = class Warrior extends Character {
    constructor (name, pointsLife, pointsAtk, pointsDef, pointsShield) {
        super (name, pointsLife, pointsAtk, pointsDef)
        this.pointsShield = pointsShield
        this.position = "atk"
    }

    alternatePosition () {
        if (this.position === "atk") {
            this.position = "def"
            this.pointsDef += this.pointsShield;
        } else {
            this.position = "atk"
            this.pointsDef -= this.pointsShield;
        }

        return this.position
    }

    atack (character) {
        if (this.position === "atk") {
            character.pointsLife = character.pointsLife-(this.pointsAtk - character.pointsDef);
        }
    }
}