class Person {
    constructor (name, address/*street, number, neighborhood, city, state*/){
        this.name = name
        this.address = address

    //podemos fazer a associação diretamente dentro de person
    //mas assim teriamos que colocar os parametros do address no construtor
    //no lugar do próprio address, e referenciar no construtor
    //fazendo dessa maneira person fica dependendo diretamente do Address
    //só podendo existir com o address

    //---this.address = new Address(street, number, neighborhood, city, state)---
    }


}

module.exports = Person