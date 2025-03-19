const path = require('node:path');
const fs = require('node:fs');
const process = require('node:process');
const readline = require('node:readline')

const notesDirectory = path.join(__dirname, "notes")

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
})

function initializeNotesDirectory () {
    if (!fs.existsSync(notesDirectory)) {
        fs.mkdirSync(notesDirectory)
    }
}

function listNotes () {

   const notes = fs.readdirSync(notesDirectory)

   if (notes.length === 0) {
        console.clear()
        console.log('Não foram encontradas notas!')
        askForNextAction()
   } else {
       console.log('Notas encontradas...\n')
       notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note}`)
       })
   }
   
}

function readNote () {
    listNotes()

    rl.question("Digite O número da nota que deseja ler: ", (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index - 1]

        if (!selectedNote) {
            console.clear()
            console.log("Número da nota inválido!\n\n")
            readNote()
        } else {
            const notePath = path.join(notesDirectory, selectedNote)
            const content = fs.readFileSync(notePath, "utf-8")
            console.clear()
            console.log(`${selectedNote}\n${content}`)
        }
        askForNextAction()
    })
}

function createNotation () {
    rl.question("Digite o nome da nota: ", (noteName) => {
        const notePath = path.join(notesDirectory, noteName)

        rl.question("Digite o conteúdo da nota:\n", (content) => {
            fs.writeFileSync(`${notePath}.txt`, content, "utf-8")
            console.clear()
            console.log(`Nota ${noteName} foi criada!`)
            askForNextAction()
        })
    })

    // const savePath = path.dirname(process.argv[1])
    
    // const task = fs.writeFileSync(`${savePath}/${name}.txt`, text, 'utf-8')
    // anotations.push(`${name}.txt`)
}


function deleteNote () {
    listNotes()
    
    rl.question("Qual o número da nota que deseja deletar? ", (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index - 1]

        if (!selectedNote) {
            console.log("Nota não encontrada!")
            deleteNote()
            askForNextAction()
        } else {
            const deletePath = path.join(notesDirectory, selectedNote)
            fs.unlinkSync(deletePath)
            console.log("Nota Deletada com Sucesso!")
        }
        askForNextAction()
    })

    
}


function askForNextAction () {
    rl.question("\nDeseja Realizar outra Ação? (s/n): ", (answer) => {
        if (answer.toLowerCase() === "s") {
            main()
        } else {
            console.log("Encerrando...")
            process.exit(0)
        }
    })
}

function main () {
    initializeNotesDirectory()
    
    console.clear()
    console.log("-------------------------------")
    console.log("Notas Rápidas no Terminal v1.0")
    console.log("-------------------------------\n")

    console.log("Escolha uma Opção:")
    console.log("1. Listar notas")
    console.log("2. Ler uma nota")
    console.log("3. Criar uma nova nota")
    console.log("4. Excluir uma nota")
    console.log("5. Sair")

    rl.question("Digite o número da opção desejada: ", (option) => {
        switch (option) {
            case "1":
                listNotes()
                askForNextAction()
                break;
            case "2":
                readNote()
                askForNextAction()
                break;
            case "3":
                createNotation()
                askForNextAction()
                break;
            case "4":
                deleteNote()
                askForNextAction()
                break;
            case "5":
                console.log("Saindo...")
                rl.close()
                process.exit(0)
                
            default:
                console.log("Opção Inválida!")
                askForNextAction()
                break;
        }
    })
}

main()