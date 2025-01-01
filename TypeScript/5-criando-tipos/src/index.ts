let options: 'Yes' | 'No' | 'Maybe';
options = 'Maybe' //dessa maneira pode assumir qualquer dos valores

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão";

let planet: Planet


let homePlanet: Planet

function checkPlanet (planet:Planet) {
    if (planet === "Terra") {
        console.log('Estamos na Terra')
        alert('Estamos na Terra')
    } else {
        alert(`Estamos em ${planet}`)
    }
}

type GreetingCallback = (name:string) => void 

function greet (callBackfn: GreetingCallback) {
    let name = 'Paulo'
    callBackfn(name)
}