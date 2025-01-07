var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Decorator() {
    return function (target, key, descriptor) {
        // descriptor.value é o nosso método decorado
        // vamos atribuir a ele uma nova função    
        descriptor.value = function (value) {
            console.log(`Calculando ${value} elevado a 2`);
            return Math.pow(value, 2);
        };
    };
}
class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2;
    }
}
__decorate([
    Decorator()
], Planet.prototype, "calculate", null);
const planet = new Planet('Terra');
const result = planet.calculate(5);
console.log(`Resultado: ${result}`);
///////////////////////////////////////////////////////////////////////////////////////////////
/*6. Uma outra forma de demonstrar a criação de decorators é utilizando um decorator @Log() para verificar as informações do método antes e depois da execução. Vejamos como fazer isso:
  
  Obs.: Aproveitamos para adicionar um novo método e demonstrar o funcionamento do Log em ambos. Repare que dentro do decorator temos acesso total ao método.
  
  Obs².: Como falado anteriormente, os decorators servem para adicionar funcionalidades a uma classe, método, propriedade ou até parâmetros, mas o principal aqui é entendermos como implementá-los, não necessariamente como construí-los.
  
  Obs³.: Apesar de não demonstrar aqui, decorators também podem receber parâmetros que modificam seu comportamento antes de retornar a função a ser executada.*/
function Log2() {
    return function (target, key, descriptor) {
        // Aqui guardamos o método original para chamá-lo manualmente
        const originalMethod = descriptor.value;
        // Aqui estamos usando a técnica de desestruturar um array
        // de argumentos para repassar quaisquer que sejam os
        // argumentos originais
        descriptor.value = function (...args) {
            console.log('-------------------------------');
            console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`);
            console.log('-------------------------------');
            return result;
        };
    };
}
class Planet2 {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log2()
], Planet2.prototype, "calculate", null);
__decorate([
    Log2()
], Planet2.prototype, "invertName", null);
const planet2 = new Planet2('Terra');
const result2 = planet.calculate(5);
console.log(`Resultado: ${result}`);
planet2.invertName();
