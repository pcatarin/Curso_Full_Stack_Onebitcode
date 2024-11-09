const Character = require("./Character")
const Thief = require("./Thief")
const Mage = require("./Mage")
const Warrior = require("./Warrior")

const paulo = new Thief('Paulo', 1500, 100, 75)
const lucas = new Character('Lucas', 1500, 100, 65)
const jhon = new Mage('Jhon', 1400, 80, 70, 50)
const paul = new Warrior("Paul", 1450, 110, 75, 75)

console.log(lucas)

paulo.atack(lucas)
console.log(lucas)

jhon.restoreLife(lucas)
console.log(lucas)

console.table({ paulo, lucas, jhon, paul })

paul.alternatePosition()
console.log(paul)
paul.atack(lucas)
console.log(lucas)
paul.alternatePosition()
paul.atack(lucas)
paul.atack(paulo)
console.log(lucas)


console.table({ paulo, lucas, jhon, paul })




