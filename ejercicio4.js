// 4.Valor: 0.25 - UEFA EURO 2023

// Finalice la función uefaEuro2023() para que devuelva una cadena como en los ejemplos a continuación:

// Entrada:    uefaEuro2023(['Alemania', 'Ucrania'],[2, 0]) 
// Salida:     "¡En el partido Alemania - Ucrania, ganó Alemania!"

// Entrada:     uefaEuro2023(['Belgium', 'Italy'],[0, 2]) 
// Salida:     "¡En el partido Bélgica - Italia, ganó Italia!"

// Entrada:    uefaEuro2023(['Portugal', 'Iceland'],[1, 1]) 
// Saluda:     "En el partido Portugal - Islandia, los equipos empataron".

function uefaEuro2023(equipos, marcador) {
    if(marcador[0] === marcador[1]){
        console.log(`En el partido ${equipos[0]} - ${equipos[1]} los partidos empataron.`);
    } else if(marcador[0] > marcador[1]){
        console.log(`En el partido ${equipos[0]} - ${equipos[1]}, gano ${equipos[0]}`);
    }else{
        console.log(`En el partido ${equipos[0]} - ${equipos[1]}, gano ${equipos[1]}`);
    }
    
}
uefaEuro2023(['Millonarios', 'Nacional'], [3,2]);
uefaEuro2023(['Millonarios', 'SantaFe'], [1,0]);