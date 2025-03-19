//Importação dos módulos necessarios para o projeto

//Módulo para leitura dos arquivos e escrita dos arquivos
const fs = require("node:fs")

//Módulo para pegar e informar os caminhos no sistema
const path = require('node:path')

//Módulo para interação em linha de comando
const readline = require('node:readline')


//Função para converção do arquivo HTML
function escapeHtmlSpecialCharacter (text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt";
            case ">":
                return "&gt";
            case"&":
                return "&amp";
            default:
                return match
        }
    })
}

//Função para fazer a conversão do arquivo informado pelo inputFilePath, e retorna o outputFilePath
function escapeHtmlFile (inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, "utf-8")
        const escapeContent = escapeHtmlSpecialCharacter(fileContent)
        fs.writeFileSync(outputFilePath, escapeContent, 'utf-8')
        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)
    } catch (error) {
        console.log('Erro!', error.message)
        process.exit(1)
    }
}

//Função para realizar a pergunta ao usuário
function askFilePath (question) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        }
        )
    })
}

//Como estamos usando os módulos sincronos, precisamos criar uma função async para poder interpreta-las e dar inicio no programa
async function userInteraction () {
    //node html-scaper.js <inputPath> <outputPath> //devera ser informado assim caso queira
    let inputPath = process.argv[2]

    //Verifica se o caminho foi informado nos argumentos caso não caira nesse if
    if (!inputPath) {
        inputPath = await askFilePath('Informe o caminho do arquivo de entrada: ')
    }
    //depois resolvemos para um caminho absoluto usando o método path.resolve
    inputPath = path.resolve(inputPath)

    //caso o usuário não queira inserir um nome criamos um nome padrão
    const defaultName = `escaped_${path.basename(inputPath)}.txt`
    const answer = await askFilePath (`Informe o caminho do arquivo de saída (Padrão: ${defaultName}): `)

    //forma simplificada de fazer o if else
    let outputPath = answer.length > 0 ? answer : defaultName
    outputPath = path.resolve(outputPath)

    escapeHtmlFile(inputPath, outputPath)
}

//Função criada para tratar quando já forem passados os argumentos
function run () {
    if (process.argv.length >= 4) {

        escapeHtmlFile(
        path.resolve(process.argv[2]),
        path.resolve(process.argv[3])
        )
    } else {

        console.log("---------------------")
        console.log("HTML Tag Escaper v1.0")
        console.log("---------------------\n")
        console.log("Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape.")
        userInteraction()
    }
}

run()

