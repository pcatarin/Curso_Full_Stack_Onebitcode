//Arrays Simples
let crew1:string[] = []

crew.push('Paulo');

//Tuplas são mais especificas
let tupla: [string, string, string] = []

//tupla.push ('Paulo', 'João', 'Pedro')
tupla[0]='Maria'
tupla[1]='Paulo'
tupla[2]='João'

let crew: [string,string,string] = []

crew[0] = 'paulo'
crew[1] = 'joão'
crew[2] = 'pedro'


let point: [number, number, string, boolean]

point = [2, 5, 'Paulo', true]

//desestruturação
let [x, y] = point
//As tuplas são usadas para construção de arrays especificos



//uso de tuplas no react exemplo:
const [name, setName] = useState['']