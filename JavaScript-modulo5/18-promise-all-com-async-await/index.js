function waitFor (seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },seconds * 1000)
    })
}

const numbers = [4, 6, 10, 12, 25]
/**1 - forma************************************************************************************/
const squares = numbers.map(async (number) => {
    await waitFor(2)
    return number * number
})

console.log(squares)

Promise.all(squares).then(results => {
    console.log(results)
})
/**2 - forma************************************************************************************/
async function execute() {
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))
    console.log(squares)
}

execute()