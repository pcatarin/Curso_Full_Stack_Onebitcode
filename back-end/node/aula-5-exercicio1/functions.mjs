import { error } from "node:console"
import fs from "node:fs"
import { resolve } from "node:path"

export function createFile (content) { 
    //sincrona-----------------------------
    //fs.writeFileSync(`./meuarquivo.txt`, content, "utf-8");

    //Assincrona---------------------------
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./meuarquivo.txt`, content, "utf-8", (error) => {
            if (error) {
                reject('Erro ao gravar o arquivo', error.message)
            } else {
                resolve()
            }
        })

    })
}

export function showFile (name) {
    //Sincrona--------------------------
    // try {
    //     const content = fs.readFileSync("./meuarquivo.txt", "utf-8");
    //     console.log(content)
    // } catch (error) {
    //     console.log('Erro ao ler o arquivo.', error.message)
    // }

    //Assincrona------------------------------------------
    return new Promise ((resolve, reject) => {
        fs.readFile(`./${name}.txt`, "utf-8", (error, data) => {
            if (error) {
                reject('Erro ao ler o arquivo', error.message)
            } else {
                console.log(data)
                resolve()
            }         
        })
    })
}

export function updateFile (newText) {
    //Sincrona----------------------------------
    //fs.writeFileSync(`./meuarquivo.txt`, newText, "utf-8");

    //Assincrona--------------------------------
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./meuarquivo.txt`, newText, "utf-8", (error) => {
            if (error) {
                reject('Erro ao gravar o arquivo', error.message)
            } else {
                resolve()
            }
            
        })

    })
}

export function deleteFile () {
    //Sincrona-----------------------
    // try {
    //     fs.unlinkSync('./meuarquivo.txt');
    //     console.log('Arquivo excluido com sucesso.')
    // } catch (error) {
    //     console.log('Erro ao excluir o arquivo.', error.message)
    // }

    //Assincrona-------------------------------------
    return new Promise ((resolve,reject) =>{
        fs.unlink("./meuarquivo.txt", (error) => {
            if (error) {
                reject("Erro ao excluir o arquivo", error.message)
            } else {
                console.log('Arquivo excluido com sucesso.')
                resolve()
            }
    
        })

    })
}