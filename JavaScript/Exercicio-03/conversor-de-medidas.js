let value = parseFloat(prompt('Qual o valor em métros:'))

const conversion = prompt('Para qual unidade de medida você gostaria de converter:\n\na) milímetro (mm)\nb) centímetro (cm)\nc) decímetro (dm)\nd) decâmetro (dam)\ne) hectômetro (hm)\nf) quilômetro (km)\n\n Escolha pela Letra.')

switch (conversion) {
    case 'a':
        value *= 1000
        alert('O valor em Mílimetros é:'+' '+value)
        break
    case 'b':
        value *= 100
        alert('O valor em Centímetros é:'+' '+value)
        break
    case 'c':
        value *= 10
        alert('O valor em Decímetros é:'+' '+value)
        break
    case 'd':
        value /= 10
        alert('O valor em Decâmetros é:'+' '+value)
        break
    case 'e':
        value /= 100
        alert('O valor em Hectômetros é:'+' '+value)
        break
    case 'f':
        value /= 1000
        alert('O valor em Quilômetros é:'+' '+value)
        break
    default:
        alert('Opção Inválida...')
}