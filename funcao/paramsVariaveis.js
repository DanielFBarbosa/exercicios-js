function soma() {
    let soma = 0
    for(i in arguments){ // argumants é um array interno
        soma += arguments [i] //soma os valores do arguments com +=
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'c'))