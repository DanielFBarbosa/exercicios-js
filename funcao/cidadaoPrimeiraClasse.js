//Função em JS é First-class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//ARMAZENAR UMA FUNÇÃO DENTRO DE UMA VARIÁVEL
const fun2 = function () {} // para invocar a função tem que ser entre os parenteses

//armazenar função dentro de um array
const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function(){return'opa'}
console.log(obj.falar())

//passar função como parâmentro

function run(fun){
    fun()
}
run (function(){console.log('executando...')})

//Uma função pode retornar e contendo uma nova função
function soma(a , b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3) (4)//primeiro resultado
const cincoMais = soma(2,3) // segundo resultado armazenando a soma do parametro em uma constante
cincoMais(4)