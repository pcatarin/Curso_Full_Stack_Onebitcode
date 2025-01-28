import fs from "node:fs"

const content = `Arquivo Modificado`

function reWriteFile (name) {
    fs.writeFile(`./${name}.txt`, content, "utf-8", (error) => {
        if (error) {
            console.log('Erro ao gravar o arquivo', error.message)
            return
        }
        console.log('Arquivo atualizado com sucesso.')
    })
}

export default reWriteFile