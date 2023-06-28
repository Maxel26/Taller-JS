// 2.Valor: 0.25 - Sumar valores de una lista

// Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0.

// Resultados esperados
let arr = [1,2,3,2,-2,1.1]
function sumArray(array) {
    if(array.length == 0){
        console.log(0);
    }else{
        let sum = 0;
        arr.forEach(element => {
        sum +=element
        });
        console.log(sum);
    }
}
sumArray(arr);