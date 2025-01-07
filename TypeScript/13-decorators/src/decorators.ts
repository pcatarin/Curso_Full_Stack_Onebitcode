function Decorator() {
    return function (target, key, descriptor) {
      // descriptor.value é o nosso método decorado
      // vamos atribuir a ele uma nova função    
      descriptor.value = function (value: number) {
        console.log(`Calculando ${value} elevado a 2`);
        return Math.pow(value, 2)
      }
    }
  }
  
  class Planet {
    name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    @Decorator()
    calculate(value: number) {
      // ...
      console.log(`Calculando ${value} * 2`);
      return value * 2
    }
  }
  
  const planet = new Planet('Terra')
  
  const result = planet.calculate(5)
  
  //console.log(`Resultado: ${result}`)

  ///////////////////////////////////////////////////////////////////////////////////////////////

  /*6. Uma outra forma de demonstrar a criação de decorators é utilizando um decorator @Log() para verificar as informações do método antes e depois da execução. Vejamos como fazer isso:
    
    Obs.: Aproveitamos para adicionar um novo método e demonstrar o funcionamento do Log em ambos. Repare que dentro do decorator temos acesso total ao método.
    
    Obs².: Como falado anteriormente, os decorators servem para adicionar funcionalidades a uma classe, método, propriedade ou até parâmetros, mas o principal aqui é entendermos como implementá-los, não necessariamente como construí-los.
    
    Obs³.: Apesar de não demonstrar aqui, decorators também podem receber parâmetros que modificam seu comportamento antes de retornar a função a ser executada.*/

    function Log2() {
        return function (target, key, descriptor) {
          // Aqui guardamos o método original para chamá-lo manualmente
          const originalMethod = descriptor.value
      
              // Aqui estamos usando a técnica de desestruturar um array
              // de argumentos para repassar quaisquer que sejam os
              // argumentos originais
          descriptor.value = function (...args: any[]) {
            console.log('-------------------------------')
            console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`)
      
            const result = originalMethod.apply(this, args)
      
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
            console.log('-------------------------------')
      
            return result
          }
        }
      }
      
      class Planet2 {
        name: string
      
        constructor(name: string) {
          this.name = name
        }
      
        @Log2()
        calculate(value: number) {
          // ...
          console.log(`Calculando ${value} * 2`);
          return value * 2
        }
      
        @Log2()
        invertName() {
          return this.name.split('').reverse().join('')
        }
      }
      
      const planet2 = new Planet2('Terra')
      
      const result2 = planet.calculate(5)
      
      console.log(`Resultado: ${result}`)
      
      planet2.invertName()