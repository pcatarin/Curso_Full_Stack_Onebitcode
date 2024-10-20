let listaDeJogadores = []
let jogador = {}


function escalarTime() {
    const name = document.getElementById('name').value
    const position = document.getElementById('position').value
    const number = document.getElementById('number').value
    let listaJogador = document.getElementById('secao-time')
    let jogadores = document.getElementsByClassName('jogadores')
    let control = 0
    const espac = document.createElement('br')
    

    const playerInfo = document.createElement('h3')
    playerInfo.innerText = "Jogador " + (jogadores.length + 1)
    
    

    const players = document.createElement('li')
    players.innerText = "Nome: " + (name) + "\nPosição: " + position + "\nNúmero: " + number +"\n\n"
    players.className = ('jogadores')
    players.id = "numero"+number
    
    
   
    const confirm = window.confirm("Deseja Salvar o Jogador:\n" + name + " como: " + position)

    if (confirm) {
        listaJogador.appendChild(players)
        document.getElementById('name').value = ""
        document.getElementById('position').value = ""
        document.getElementById('number').value = ""
        
    }else {
        document.getElementById('name').value = ""
        document.getElementById('position').value = ""
        document.getElementById('number').value = ""
    }
    
    
}

function removerJogador() {
    const numeroRemover = document.getElementById('number-del').value
    const playerRemove = document.getElementById('numero'+numeroRemover)

    const confirmRem = confirm('Deseja Remover o Jogador:\n ' + playerRemove.innerText)

    if (confirmRem) {
        playerRemove.remove()
        document.getElementById('number-del').value = ''
    }
}