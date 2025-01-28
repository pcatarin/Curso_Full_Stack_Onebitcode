const os = require("node:os");


const plataforma = os.platform()
console.log('Plataforma:',plataforma)

const arquitetura = os.arch()
console.log('Arquitetura:', arquitetura)

const processadores = os.cpus()
console.log('Processadores:', processadores[0])

const memorie = os.totalmem()
console.log('RAM do computador', memorie / 1024 / 1024 / 1024)

