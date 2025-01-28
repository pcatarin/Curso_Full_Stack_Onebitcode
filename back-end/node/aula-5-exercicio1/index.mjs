import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs" 

async function start () {
    await createFile("Conteúdo inicial do arquivo\nCriado com o módulo fs do node.")
    await showFile("meuarquivo")
    console.log('---------------------------')
    await updateFile("Novo conteúdo atualizado.")
    await showFile("meuarquivo")
    console.log('---------------------------')
    await deleteFile()
    
}

start()