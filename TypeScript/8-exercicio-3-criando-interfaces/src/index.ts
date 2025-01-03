//Primeiro vamos criar nossas interfaces para tipar as respostas que obteremos da API do GitHub
interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: "Not Found"
}

//Interface para respostas de requisição dos repositórios do usuário
interface GithubRepoResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

//Começar a fazer as requisições usando as interfaces
//criamos um array para receber os dados
const users : GithubUserResponse[] = []

//como vamos trabalhar com promisses, usamos uma função async para aguardar "await" a resposta da requisição que é uma promisse.
async function fetchUser (userName: string) {

    //criamos uma variavel para armazenar a resposta da requisição
    const response = await fetch(`https://api.github.com/users/${userName}`)

    //criamos uma variavel para armazenar a requisição convertida em um arquivo javascript
    const user: GithubUserResponse = await response.json()

    if(user.message) {
        console.log('Usuário não Encontrado...')
    } else {
        users.push(user)

        console.log(
            `O usuário ${user.login} foi salvo\n`+
            `\nId: ${user.id}`+
            `\nLogin: ${user.login}`+
            `\nNome: ${user.name}`+
            `\nBio: ${user.bio}`+
            `\nRepositórios Publicos: ${user.public_repos}`
        )
    }

    return user
}
//vamos criar agora uma função para exibição dos repositórios
async function showUser (userName: string) {
    const user = users.find(user => user.login === userName)

    if (typeof user === "undefined") {
        console.log('Usuário não Encontrado...')
    } else {
        //meu código com erro para comparação e achar o erro

        //neste ponto eu não preciso chamar fetchUser e somente o fetch para o usuario encontrado pois o mesmo já possui um url valida
        // const response = await fetchUser(user.repos_url)**** linha do erro
        
        // const repos: GithubRepoResponse[] = await response.json()

        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()

        let message = `id: ${user.id}\n` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`

        repos.forEach(repo => {
        message += `\nNome: ${repo.name}` +
        `\nDescrição: ${repo.description}` +
        `\nEstrelas: ${repo.stargazers_count}` +
        `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
    })

    console.log(message)
    }
}

//As próximas função não precisa ser async, uma vez que já salvamos as informações em um array

//Mostar os usuários
function showAllUsers () {
    let message = `Usuários:\n`

    //Fazer um forEach para iterar sobre cada usuário do array
    users.forEach(user => {
        message += `\n- ${user.login}`
    })

    console.log(message)
}

//mostrar o total de repositórios dos usuários
function showReposTotal () {
    const reposTotal = users.reduce((acumulador, elementoAtual) => acumulador + elementoAtual.public_repos, 0)

    console.log(`O Grupo um total de ${reposTotal} repositórios publicos.`)
}

//Exibir o top 5 dos usuários com mais repositórios publicos
function showTopFive () {
    //realizamos o slice sem parâmetros no array original para criar uma cópia e não modificar o array original e o sort nesta cópia para ordenar como queremos.
    const topFive = users.slice().sort((usuarioAtual, proximoUsuario) => proximoUsuario.public_repos - usuarioAtual.public_repos).slice(0, 5)
    //Desta maneira ordenamos do maior para o menor e usamos o slice novamente só que agora com os parâmetros para pegarmos somente os 5 primeiros.

    //Agora realizamos um forEach na cópia do array e mostrar somente os 5
    let message = `Top 5 usuários com mais repósitórios públicos:\n`

    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios. `
    }) 

    console.log(message)
}

async function main() {
    await fetchUser('isaaclarrubia')
    await fetchUser('julianaconde')
    await fetchUser('pcaldass')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans203')
    await fetchUser('LeDragoX')
    await fetchUser('pcatarin')
  
    await showUser('pcatarin')
    await showUser('isaaclarrubia')
    await showUser('julianaconde')
  
    showAllUsers()
    showReposTotal()
    showTopFive()
  }
  
  main()



/////////////////////////////////////////////////////////////////////////////////////////////////
//criei esse código para teste da requisição
// function callUser (userName:string) {
//     const user= fetchUser(userName)
//     return user
// }
// async function createUserInfo (userName:string/*, id:number, login:string, name:string, bio:string, public_repos: number, repos_url: string*/) {
//     const userCall = callUser(userName)
//     let user: GithubUserResponse = {
//         id : (await userCall).id,
//         login : (await userCall).login,
//         name : (await userCall).name,
//         bio: (await userCall).bio,
//         public_repos: (await userCall).public_repos,
//         repos_url: (await userCall).repos_url
//     }
//     return user
// }
//E está funcional
/////////////////////////////////////////////////////////////////////////////////////////////////

