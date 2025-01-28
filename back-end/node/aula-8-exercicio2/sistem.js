const os = require("node:os")
const fs = require("node:fs")
let cpuIndormation = ''

function information () {
    const so = os.type().split("_")[0]
    const arch = os.arch().split("").slice(1).join('')
    const processor = (os.cpus()[0]).model
    //const activit = Math.floor((os.uptime())/60/60)
    const memorieFree = (os.freemem()/1024/1024/1024).toFixed(2)
    const memorie = (os.totalmem()/1024/1024/1024).toFixed(2)
    const memorieUsed = memorie - memorieFree 
    const percent = Math.floor((memorieUsed/memorie)*100)

    const timeDays = Math.floor(os.uptime()/60/60/24)
    const timeDaysInSeconds = timeDays * 24 * 60 * 60 

    const timeHours = Math.floor(os.uptime()/60/60)
    const timehoursInSeconds = timeHours * 60 * 60

    const timeMinuts = Math.floor(os.uptime()/60)
    const minutsInSeconds = timeMinuts * 60

    const hours = Math.floor((os.uptime() - timeDaysInSeconds) / 60 / 60)
    const hoursInSeconds = hours * 60 * 60

    const minutes = Math.floor((os.uptime()  - timehoursInSeconds)/60)
    const minutesInSeconds = minutes * 60

    const seconds = Math.floor(os.uptime() - timeDaysInSeconds - hoursInSeconds - minutesInSeconds)

    cpuIndormation = `-------------------\nSistema: ${so}\nArquitetura: ${arch} Bites\nProcessador: ${processor}\nTempo de Atividade: ${timeDays}:${hours}:${minutes}:${seconds}\nUso da Memória: ${memorieUsed} GB / ${memorie} GB (${percent} %)\n----------------------`

    console.clear()
    console.log(cpuIndormation)
    

    return cpuIndormation
}

async function createData (data) {
    //fs.writeFileSync('./log/log.txt', data, 'utf-8')
    fs.appendFileSync('./log/log.txt', data, 'utf-8')
    
}

setInterval(() => {
    information()
    createData(cpuIndormation)
},1000)

// const timeDays = Math.floor(os.uptime()/60/60/24)
// const timeDaysInSeconds = timeDays * 24 * 60 * 60 

// const timeHours = Math.floor(os.uptime()/60/60)
// const timehoursInSeconds = timeHours * 60 * 60

// const timeMinuts = Math.floor(os.uptime()/60)
// const minutsInSeconds = timeMinuts * 60

// const hours = Math.floor((os.uptime() - timeDaysInSeconds) / 60 / 60)
// const hoursInSeconds = hours * 60 * 60

// const minutes = Math.floor((os.uptime()  - timehoursInSeconds)/60)
// const minutesInSeconds = minutes * 60

// const seconds = Math.floor(os.uptime() - timeDaysInSeconds - hoursInSeconds - minutesInSeconds)

// setInterval(() => {
//     let seconds = os.uptime() - timeDaysInSeconds - hoursInSeconds - minutesInSeconds
//     if (seconds === 60) {
//         seconds = 1
//     }
//     console.clear()
//     console.log(seconds)
//     // console.log(timeDays)
//     // console.log(hours)
//     // console.log(minutes)
    

// },1000)