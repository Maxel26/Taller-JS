// 9.Formatea los datos de la lista Imprime la lista en la consola, el resultado final debe ser el siguiente:

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];
// El resultado esperado es el siguiente:

// Grupo 1:
//     Pablo
//     Maria
//     Pedro
// Grupo 2:
//     Diana
//     Juan
//     Federico
// Grupo 3:
//     Roberto
//     Daniel
//     Sandra

for (let i = 0; i < 1; i++) {
    let grupo = 1;
    mat.forEach(element => {
        console.log(`Grupo ${grupo}: ${element}`);
        grupo++
    });
    
}

