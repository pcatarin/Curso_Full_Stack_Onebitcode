let opcoes = ""
const valorPi = 3.14

do {
    opcoes = prompt('Deseja Calcular a Área de qual forma: \n' +
        '\n1. Área do Triângulo' +
        '\n2. Área do Retângulo' +
        '\n3. Área do Quadrado' +
        '\n4. Área do Trapézio' +
        '\n5. Área do Círculo' +
        '\n6. Encerrar...' +
        '\n\n Escolha pelo numero'
    )

    

    switch (opcoes) {
        

        case "1":
            function triangulo (baset,alturat) {
                let areaTriangulo = (baset*alturat)/2
                return areaTriangulo
            }
            let baset = parseFloat(prompt('Qual a base do triângulo?'))
            let alturat = parseFloat(prompt('Qual a altura?'))

            alert('A área do Triângulo é: ' + triangulo(baset,alturat))
            break

        case "2":
            function retangulo (baser,alturar) {
                let areaRetangulo = baser*alturar
                return areaRetangulo
            }
            let baser = parseFloat(prompt('Qual a base do Retângulo?'))
            let alturar = parseFloat(prompt('Qual a altura?'))

            alert('A área do Retângulo é: ' + retangulo(baser,alturar))
            break

        case "3":
            function quadrado (baseq) {
                let areaQuadrado = baseq**2
                return areaQuadrado
            }
            let baseq = parseFloat(prompt('Qual a base do Quadrado?'))

            alert('A área do Quadrado é: ' + quadrado(baseq))
            break

        case "4":
            function trapezio (baseMaior,baseMenor,alturaTr) {
                let areaTrapezio = (baseMaior+baseMenor)*alturaTr/2
                return areaTrapezio
            }
            let baseMaior = parseFloat(prompt('Qual a base maior do Trapézio?'))
            let baseMenor = parseFloat(prompt('Qual a base menor do Trapézio?'))
            let alturaTr = parseFloat(prompt('Qual a altura?'))

            alert('A área do Trapézio é: ' + trapezio(baseMaior,baseMenor,alturaTr))
            break

        case "5":
            function circulo (raio) {
                let areaCirculo = valorPi*raio**2
                return areaCirculo
            }
            let raio = parseFloat(prompt('Qual o raio do Círculo?'))
            

            alert('A área do Circulo é: ' + circulo(raio))
            break

        case "6":
            alert('Encerrando...')
            break

        default:
            alert('Opção Inválida...')
    }

} while (opcoes !== "6")