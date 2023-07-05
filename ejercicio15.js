// 15.Valor: 1.0 - Ordenar lista de numeros

// Crea una función llamada ordenarDesc (puede ser normal o función flecha) que reciba un arreglo de números como argumento y que retorne la lista ordenada de forma descendente (es decir, de mayor a menor)

// function ordenarDesc(arr) {
//     arr.sort();
//     let arrDes = [] ;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.length > 1){
//             let maxNum = Math.max(...arr);
//             arrDes.push(maxNum);
//             arr.pop();
//         } else {
//             let num = arr[0]
//             arrDes.push(num) 
//         }
            
//     //   console.log(arr);  
//     }
//     return arrDes ;
// }

function ordenarDesc(arr) {
    arr.sort();
    let arrDes = arr.reverse();

    return arrDes ;
}


console.log(ordenarDesc([4,2,3]));



