// 12. Valor: 0.75 - Dibuja

// Crea una funcion que recibirá como parámetro una letra, por ejemplo la letra o a partir de la cual dibujará el siguiente patrón. Una matriz de 10 x 10 donde dicha letra se imprimirá de forma intercalada.

function intercalada(letra){
    for (let i = 1; i <= 10; i++) {
        let fila = ''
        if(i % 2 !== 0){
            for (let j = 1; j <= 10; j++) {
                if(j % 2 !== 0) {
                    fila = fila + letra + ' '
                } 
            }
        }else if(i % 2 === 0){
            fila = ' ';
            for (let k = 1; k <= 10; k++) {
                
                if(k % 2 === 0){
                    fila += letra + ' '
                }   
            }
        }
        console.log(fila);
    }
}  
intercalada('o');