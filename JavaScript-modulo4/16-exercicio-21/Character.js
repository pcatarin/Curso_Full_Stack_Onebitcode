class Character {
    constructor (name, pointsLife, pointsAtk, pointsDef) {
        this.type = this
        this.name = name;
        this.pointsLife = pointsLife;
        this.pointsAtk = pointsAtk;
        this.pointsDef = pointsDef;
    };

    atack (character) {
        character.pointsLife = character.pointsLife-(this.pointsAtk - character.pointsDef);
    };
};

module.exports = Character

