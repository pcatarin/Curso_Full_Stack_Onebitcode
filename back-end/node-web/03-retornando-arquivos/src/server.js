const express = require('express')

const app = express()

//essa é a maneira que referenciamos de onde serão tirados os arquivo, desse maneira a pasta raiz passa a ser a public de acordo com o servidor, ao incluir o arquivo javascript ou css no html, colocamos '/nomedoarquivo.extensão', e se houver outras pastas '/outrapasta/nomedoarquivo.extensão.
app.use(express.static('public'))

//está é a maneira para referenciarmos o arquivo que queremos usar e o caminho onde será usado, se ao lado da '/' colocarmos um caminho especifico, aquele arquivo só funcionara no caminho  referenciado
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))