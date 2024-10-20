//primeiro selecionar todas as regiões do tabuleiro
const boardRegions= document.querySelectorAll('#gameBoard span')
//depois criar um tabuleiro virtual para gerenciar o visual 
let vBoard = [] 
//criar a variavel para o jogador da vez
let turnPlayer = ''

//criar uma função para atualizar o jogador da vez dinamicamente
function updateTitle () {
    //pegar o input do jogador
    const playerInput = document.getElementById(turnPlayer)
    //colocar o texto do input no span
    document.getElementById('turnPlayer').innerText = playerInput.value 
}

//função para o botão de começar inicializar o jogo ou preparar
function initializeGame () {
    //atribuir ao tabuleiro virtual um array bidmensional
    //construindo assim uma tabela para controle do jogo
    vBoard = [['','',''], ['','',''], ['','','']]
    //atribuir ao turnPlayer o nome do player 1 que inicia o jogo
    turnPlayer = 'player1'
    //selecionar o h2 e o seu html para poder anunciar o vencedor ou situação
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    //depois disso podemos chamar a função updateTitle para exibir o jogador da vez
    updateTitle()
    //e limpar todas as regiões do tabuleiro
    //o element passado no parametro da função referencia cada span
    boardRegions.forEach(function (element) {
        //remover todas as classes win e textos para reiniciar o jogo, como um reset
        element.classList.remove('win')
        element.innerText = ''
        element.classList.add('cursor-pointer')
        //adicionar um evento de click para cada região marcando assim local escolhido
        element.addEventListener('click', handleBoardClick)
    })
}

//criar uma função para verificar se o jogador venceu
function getWinRegions () {
    const winRegions = []
        if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
            winRegions.push("0.0", "0.1", "0.2")
        if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
            winRegions.push("1.0", "1.1", "1.2")
        if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
            winRegions.push("2.0", "2.1", "2.2")
        if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
            winRegions.push("0.0", "1.0", "2.0")
        if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
            winRegions.push("0.1", "1.1", "2.1")
        if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
            winRegions.push("0.2", "1.2", "2.2")
        if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
            winRegions.push("0.0", "1.1", "2.2")
        if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
            winRegions.push("0.2", "1.1", "2.0")
        return winRegions
    }

//vamos criar uma função para desabilitar a area clicada
function disableRegion (element) {
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

//função para marcar a direção de vitória
function handleWin (regions) {
    //para cada região de vitória fazer um forEach e passar um callBack
    regions.forEach(function (region) {
        document.querySelector('[data-region="' + region + '"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + 'VENCEU!'
}

//função para os eventos de click nas regiões
function handleBoardClick(ev) {
    //obter a região que foi clicada
    //usando o current target obtemos a região clicada
    const span = ev.currentTarget
    const region = span.dataset.region
    //dataset.region é o atributo data do span ele é composto por N.N
    //podemos separar esses valores para controlar exatamente onde esta o click
    //indicamos com a string que separa o local que ele vai dividir usando o split
    //criando um array com os elementos ['N', 'N']
    const rowColumnPair = region.split('.')
    //podemos agora identificar a linha e a coluna
    //sendo o primeiro valor da linha e o segundo a coluna
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    //fazer agora uma verificação no jogador da vez e fazer sua marca
    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        //marcar no tabuleiro virtual
        vBoard [row] [column] = 'X'
    } else {
        span.innerText = 'O'
        //marcar no tabuleiro virtual
        vBoard [row] [column] = 'O'
    }
    //para acompanhar vamos limpando o console e mostrando o tabuleiro virtual
    console.clear()
    console.table(vBoard)
    //função para desabilitar a area que ja foi clicada
    disableRegion (span)
    //verficar se o jogador venceu
    const winRegions = getWinRegions()
    //verificar se alguma posição de vitória
    if (winRegions.length > 0) {
        handleWin(winRegions)
    //verificar se todas as posições estão preenchidas
    //o método flat transforma um array bidemensional em um array unidimensional
    } else if (vBoard.flat().includes('')) {
        //essa é uma verificação if de uma linha só 
        //depois da '?' if => depois do ':' Else pode ser atribuido a uma variavel
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        updateTitle()
    } else {
        document.querySelector('h2').innerHTML = 'EMPATE!'
        //por isso selecionamos o innerHTML no inicio
    }
}

//colocar a função de inciar ao botão começar
document.getElementById('start').addEventListener('click', initializeGame)

