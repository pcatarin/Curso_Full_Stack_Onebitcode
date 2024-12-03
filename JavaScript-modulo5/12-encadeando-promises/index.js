function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

getAge('1983-12-13')
.then((age) => checkAge(age))//uma arrow function sem as chaves é quando precisamos simplesmente de um return sem uma ação
.then((isOver18) => {
    if (isOver18) {
        console.log('Maior de Idade.')
    } else {
        console.log('Menor de Idade.')
    }
})
.catch(err => {
    console.log(err.message)
})
    