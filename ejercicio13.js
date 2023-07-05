// 13. Valor 0.25 - El mayor de una lista

// Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

// Nota: No utilices el método Math.max de JavaScript.

function max(arr){
    let maxNumber = arr[0];
    for (let num = 0; num <= arr.length; num++) {
        if(maxNumber < arr[num]) {
            maxNumber = arr[num] ;
        }
    }
    return maxNumber
}

console.log( max( [ 1, 2, 3, 4 ] ) ) // 4
console.log( max( [ 63, 85, 39, 24, 3 ] ) ) // 85