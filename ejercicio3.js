// 3.Valor: 0.5 - Contar por X
// Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.
// Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.
// Devuelve los resultados como una lista.

function countBy(num1,num2) {
    let arr = []
    for (let i = 1; i <= num2; i++) {
        let sum = num1 * i ;
        arr.push(sum) 
    }
    return arr ;
}

console.log(countBy(3,5));
console.log(countBy(2,5));
console.log(countBy(1,10));