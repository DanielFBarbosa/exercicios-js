function tratarErroELancar(erro) {
    //throw new Error('ERRO DE PROCESSAMENTO..')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw  {
        nome: erro.name,
        msg: erro.mensage,
        date: new date
}
}
function imprimirNomeGritado(obj) {
    try {
         console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}
 const obj = {nome: 'Roberto'}  
 imprimirNomeGritado(obj)