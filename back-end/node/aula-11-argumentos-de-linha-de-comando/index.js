const process = require("node:process")
const args = process.argv.slice(2)

console.log(args)
const namedArguments = {}

args.forEach((arg, index, array) => {
    if (arg.startsWith('--')) {
        const argName = arg.slice(2)
        const argValue = array[index + 1]
        namedArguments[argName] = argValue
        console.log(argName, argValue)
        console.log(namedArguments)
        
    }
    
})

