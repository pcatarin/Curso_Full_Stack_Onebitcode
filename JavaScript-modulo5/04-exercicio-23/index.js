function validateEmail (email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
    
}

function validatePassword (password) {
    if (
        password.length < 8 || 
        !password.match(/[a-z]/) || 
        !password.match(/[A-Z]/) || 
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error ('Senha Inválida.')
        err.password = 'password'
        throw err
    }
}


// function resetFormStyles() {
//     Object.entries(userInput).forEach(([key, value]) => {
//         value.classList.remove('success', 'error')
//         document.querySelector(`#${key}-erro`).textContent = ''
//     })
// }

const userInput = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}



const form = document.querySelector('form')

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()
    //resetFormStyles()
    userInput.email.classList.remove('error')
    userInput.password.classList.remove('error')
    document.querySelector('span#email-erro','span#password-erro').textContent = ""
    document.querySelector('span#password-erro','span#password-erro').textContent = ""

    try {
        userInput.name.classList.add('success')
        validateEmail(userInput.email.value)
        userInput.email.classList.add('success')
    } catch (err) {
        userInput[err.input].classList.add('error')
        document.querySelector(`#email-erro`).textContent = err.message
    }
    try {
        validatePassword(userInput.password.value)
        userInput.password.classList.add('success')
    } catch (err) {
        userInput.password.classList.add('error')
        document.querySelector(`#password-erro`).textContent = err.message
    }
})
