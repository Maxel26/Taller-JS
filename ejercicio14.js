// 14.Valor: 0.25 - El mayor de N numero de argumentos

// Modifica el ejercicio anterior para que la función max no reciba un arreglo sino un número indeterminado de argumentos.

function max(){
    let maxNumber = arguments[0];
    for (let num = 0; num <= arguments.length; num++) {
        if(maxNumber < arguments[num]) {
            maxNumber = arguments[num] ;
        }
    }
    return maxNumber
}

console.log( max( 1, 2, 3, 4 ) ) // 4
console.log( max( 63, 85, 39, 24, 3 ) ) // 85
console.log( max( 63, 85, 39, 240, 3 ) ) // 240