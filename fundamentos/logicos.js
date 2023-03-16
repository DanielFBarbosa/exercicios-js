/* Operadores lógicos
    e
v e v -> v
v e f -> f
f e ? -> f

     ou 
v ou ? -> v
f ou v -> v
f ou f -> f

xor = ou exclusivo
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

negaçao lógica de 
!v -> f
!f -> v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador Unário

        return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} 
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))