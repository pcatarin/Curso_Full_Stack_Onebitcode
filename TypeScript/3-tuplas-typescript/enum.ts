//Enums são conjuntos de constantes que podemos atribuir nomes a elas

enum Planets {
    Mercurio,
    Venus,
    Terra,
    Marte
}

Planets.Terra

//podemos declarar os numeros começando por um valor especifico, os enums, retornam um numero sempre 
enum PlanetsB {
    Mercurio = 2,
    Venus,//3
    Terra,//4
    Marte//5
}

//podemos declarar os valores dos itens com strings
enum PlanetsC {
    Mercurio = 'Mercúrio',
    Venus = 'Vênus',
    Terra = 'Terra',
    Marte = 'Marte'
}

//Trazendo os enums em um exemplo pratico real
enum Roles {
    ADMIN,//=1 //='admin'
    USER //=2 //='user'
}

//Assim podemos referenciar o admin retornando um numero especifico e outro para user ou retornando uma string