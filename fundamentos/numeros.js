const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//isInteger é inteiro>> verdadeiro ou falso(true or false)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //define a quantidade de decimais entre parentes e não altera o valor da constante.
console.log(media.toString()) // Valor original da constante
console.log(media.toString(2))//transforma o valor em binário (ponto flutuante)
console.log(typeof media) //tipagem
console.log(typeof Number)// funçao quando escrito com N MAIÚSCULO  

