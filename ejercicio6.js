//6.Valor: 0.5 - ¿Qué tan bueno eres realmente?*

// Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

// Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

// ¡Devuelve True si estás mejor, de lo contrario False!

// Nota: Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!

function promedio(arrNots) {
    let confirmacion = prompt('Deseas agregar tu nota, S/N').toUpperCase()
    if(confirmacion == 'S'.toUpperCase()){
        let miNota = Number(prompt('Digite su nota'))
        arrNots.push(miNota);
    }
    let sumNotas = 0;
    arrNots.forEach(element => {
        sumNotas += element
    });
    let promedio = sumNotas / arrNots.length
    return `El promedio entre tus compañeros fue ${promedio}`
}

console.log(promedio([2,3,4,5,4]))


