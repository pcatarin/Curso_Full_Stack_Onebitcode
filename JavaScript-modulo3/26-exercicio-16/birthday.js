/*
Diferença
Isso indica a diferença entre duas datas e horas na unidade especificada.

Para obter a diferença em milissegundos, use dayjs#diff.

const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
Para obter a diferença em outra unidade de medida, passe essa medida como o segundo argumento.

const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month') // 7
Por padrão, dayjs#difftruncará o resultado para zero casas decimais, retornando um inteiro. Se você quiser um número de ponto flutuante, passe true como o terceiro argumento.

const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month', true) // 7.645161290322581
Lista de todas as unidades disponíveis
As unidades não diferenciam maiúsculas de minúsculas e suportam formas plurais e abreviadas. Observe que as formas abreviadas diferenciam maiúsculas de minúsculas.

Unidade	Taquigrafia	Descrição
day	d	Dia
week	w	Semana do Ano
quarter	Q	Trimestre
month	M	Mês (janeiro como 0, dezembro como 11)
year	y	Ano
hour	h	Hora
minute	m	Minuto
second	s	Segundo
millisecond	ms	Milissegundo
****************************************************************************
Adicionar
Retorna um objeto Day.js clonado com uma quantidade de tempo especificada adicionada.

const a = dayjs()
const b = a.add(7, 'day')

// a -> the original value and will not change
// b -> the manipulation result
As unidades não diferenciam maiúsculas de minúsculas e suportam formas plurais e abreviadas. Observe que as formas abreviadas diferenciam maiúsculas de minúsculas.

Lista de todas as unidades disponíveis
Unidade	Taquigrafia	Descrição
day	d	Dia
week	w	Semana
month	M	Mês
quarter	Q	Trimestre ( plugin dependente) QuarterOfYear
year	y	Ano
hour	h	Hora
minute	m	Minuto
second	s	Segundo
millisecond	ms	Milissegundo
Como alternativa, você pode usar durações para adicionar ao objeto Day.js.

result = dayjs().add(dayjs.duration({'days' : 1}))
Quando valores decimais são passados ​​para dias e semanas , eles são arredondados para o inteiro mais próximo antes da adição.
****************************************************************************
Formatar
Obtenha a data formatada de acordo com a sequência de tokens passada.

Para escapar caracteres, coloque-os entre colchetes (por exemplo, [MM]).

dayjs().format() 
// current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]') 
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'

dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
Lista de todos os formatos disponíveis
Formatar	Saída	Descrição
YY	18	Ano de dois dígitos
YYYY	2018	Ano de quatro dígitos
M	1-12	O mês, começando em 1
MM	01-12	O mês, 2 dígitos
MMM	Jan-Dez	O nome abreviado do mês
MMMM	Janeiro-Dezembro	O nome completo do mês
D	1-31	O dia do mês
DD	01-31	O dia do mês, 2 dígitos
d	0-6	O dia da semana, com domingo como 0
dd	Su-Sá	O nome mínimo do dia da semana
ddd	Dom-Sáb	O nome curto do dia da semana
dddd	Domingo-Sábado	O nome do dia da semana
H	0-23	A hora
HH	00-23	A hora, 2 dígitos
h	1-12	O relógio de 12 horas
hh	01-12	A hora, relógio de 12 horas, 2 dígitos
m	0-59	O minuto
mm	00-59	O minuto, 2 dígitos
s	0-59	O segundo
ss	00-59	O segundo, 2 dígitos
SSS	000-999	O milissegundo, 3 dígitos
Z	+05:00	O deslocamento do UTC, ±HH:mm
ZZ	+0500	O deslocamento do UTC, ±HHmm
A	AM PM	
a	sou pm	
...	...	Outros formatos ( plugin dependente) AdvancedFormat
Mais formatos disponíveis Q Do k kk X x ...no pluginAdvancedFormat
Formatos localizados
Como a formatação preferida difere de acordo com a localidade, há alguns tokens de formato localizados que podem ser usados ​​com base na localidade.

Isso requer que o plugin funcione LocalizedFormat
dayjs.extend(LocalizedFormat)
dayjs().format('L LT')
Lista de formatos localizados
Formatar	Localidade em inglês	Saída de amostra
LT	h:mm Um	20h02
LTS	h:mm:ss Um	20h02min18s
L	MM/DD/AAAA	16/08/2018
LL	MMMM D, AAAA	16 de agosto de 2018
LLL	MMMM D, AAAA h:mm A	16 de agosto de 2018 20:02
LLLL	dddd, MMMM D, AAAA h:mm A	Quinta-feira, 16 de agosto de 2018 20:02
l	M/D/AAAA	16/08/2018
ll	MMM D, AAAA	16 de agosto de 2018
lll	MMM D, AAAA h:mm A	16 de agosto de 2018 20:02
llll	ddd, MMM D, AAAA h:mm A	Qui, 16 de agosto de 2018 20:02
*/
const dayjs = require("dayjs")

function birthday (date) {
    const birthday = dayjs(date)
    //passando o proprio parametro da função assumimos que é uma string ele passa a ser uma data do dayjs

    const today = dayjs()
    //declarando dessa maneira sem parametro ele pega a data atual hoje e hora atual

    //Agora chamamos o método 'dif' que da a diferença de uma data com a outra
    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day')

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1995-10-25")//Especificação da data deve estar no formato ingles yyyy-mm-dd