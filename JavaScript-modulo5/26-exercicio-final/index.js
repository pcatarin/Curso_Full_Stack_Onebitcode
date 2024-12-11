let transactions = []

//função para criar div onde ficarão as transações
function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

//função para criar span para deixar tudo na mesma linha, que receberá o nome da transação
function createTransactionTitle (name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}
/*********************************************************************************************/

//função para criar o span com o valor da transação
function createTransactionAmount (amount) {
    const span = document.createElement('span')
    //formatador para deixar na moeda local o número
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formateAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = ` ${formateAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = ` ${formateAmount} D`
        span.classList.add('debit')
    }
    return span
}
/***********************************************************************************************/

/*************Botão de Edição das Transações****************************************************/
function createEditTransactionBtn (transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('#id').value = transaction.id
        document.querySelector('#name').value = transaction.name
        document.querySelector('#amount').value = transaction.amount
    })
    return editBtn
}
/***********************************************************************************************/

/*************Botão de Excluir as Transações****************************************************/
function createDeleteTransactionBtn (id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })
    return deleteBtn
}
/***********************************************************************************************/

//Função para renderizar as transações na tela***************************************/
function renderTransaction (transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)

    container.append(title, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').append(container)
}
/***********************************************************************************************/

//Função async pois deve esperar a resposta do servidor para salvar ou editar transações 
async function saveTransaction (ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value 
    const amount = parseFloat(document.querySelector('#amount').value)
    
    if (id) {
        //editar transação
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)
    } else {
        //criar nova transação
        //para o post devemos passar um objeto para o fetch depois da url
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    

    const transaction = await response.json()

    transactions.push(transaction)
    renderTransaction(transaction)

    ev.target.reset()
    updateBalance()
}
/***********************************************************************************************/

//Função async pois deve esperar a resposta do servidor que recebe as transações salvas
async function fetchTransactions () {
    return await fetch('http://localhost:3000/transactions').then (res => res.json())
} 
/***********************************************************************************************/

//Função para atualizar o saldo*****************************************************************/
function updateBalance () {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
    if (balance > 0) {
        balanceSpan.classList.add('positive')
    } else {
        balanceSpan.classList.add('negative')
    }
}
/***********************************************************************************************/

//Função para adicionar as transações em um array e assim evitar ficar chamando o servidor, e chamando sua renderização em tela e atualizar saldo
async function setup () {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}
/***********************************************************************************************/

//Chamadas das funções nos Eventos HTML
document.addEventListener('DOMContentLoaded', setup)
/***********************************************************************************************/

//Chamada para salvar a transação
document.querySelector('form').addEventListener('submit', saveTransaction)
/***********************************************************************************************/

