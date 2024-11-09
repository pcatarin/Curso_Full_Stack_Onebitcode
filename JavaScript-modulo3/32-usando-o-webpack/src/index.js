const dayjs = require('dayjs')
import './styles/index.css'

/*podemos usar o import para o dayjs tambem

import dayjs from 'dayjs'

*/

alert(`Hoje é: ${dayjs().format("DD/MM/YYYY")}`)