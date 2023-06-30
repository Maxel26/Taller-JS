// 5.Valor: 1.0 - Combinar dos matrices ordenadas en una

// Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función combinarListas( lista1, lista2 ), donde lista1 y lista2 son las listas ordenadas originales.

// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

// Nota: lista1 y lista2 pueden clasificarse en diferentes órdenes. También lista1 y lista2 pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.


let arr1 = [1,2];
let arr2 = [4,3];



// console.log(combi);

function concatArray(arr1,arr2) {
  let combi = arr1.concat(arr2)
  combi.sort();
  return combi.filter((valor,indice,arreglo) => arreglo.indexOf(valor) === indice);
}

 console.log(concatArray(arr1,arr2));

