function isMutant(dna){
    console.log('dna desde ismutant' + dna);
    const dnaTxt = crear_array(dna);
    let numMutaciones = 0;
    let salir = false;
    let ciclo = 0;
    let resultado  ='';
    const filas = dnaTxt.length ;
    const columnas = dnaTxt[0].length;
    console.log(`filas:${filas} -- col:${columnas}`);

    while (salir == false) {
        console.log('ciclo: ' + ciclo);
        switch (ciclo) {
            case 0: // repetidos vertical
                if(filas >=4){
                    numMutaciones = findMutantV(dnaTxt);
                    resultado += ` - ${numMutaciones} cadena(s) verticale(s) \n`;
                }                
                break;
            case 1: // repetidos horizontal
                if(columnas >=4){
                    numMutaciones += findMutantH(dnaTxt);    
                    resultado += ` - ${numMutaciones} cadena(s) horizontale(s) \n`;
                }                
                break;
            case 2: // repetidos diagonal
                console.log(`col ${columnas} fila ${filas}`);
                if(columnas >=4 && filas >=4){
                    numMutaciones += findMutantD(dnaTxt);    
                    resultado += ` - ${numMutaciones} cadena(s) diagonal(es) \n`;
                }                
                break;
        };

        if (numMutaciones > 2 || ciclo >2){
            salir = true;
        }
        ciclo++;
    };

    console.log(dnaTxt); 
    const resMutante = [numMutaciones, resultado]; 
    return resMutante;  
};

function crear_array(dna) {
    const texto_dna = dna.split(':')[1].replace("}","");
    const matriz_dna = JSON.parse(texto_dna);
    return matriz_dna;
};

function findMutantH(dna){
    let numMutantes = 0;
    
    dna.map((fila)=>{
        //console.log(fila);
        const arrayFila = fila.split('');
        //console.log(arrayFila);
        let repeticiones = 0;
        let letra = "";

        arrayFila.map((c)=>{
            //console.log(c);
            if(c==letra){
                repeticiones++;
            } else {
                letra =c;
            };
        });

        if(repeticiones == 3){
            numMutantes++;     
        }
        
    });
    console.log('numero secuencias mutantes H: ' + numMutantes);
    return numMutantes;
};

function findMutantV(dna){
    
    let numMutantes = 0;
    let cadena = '';
    //console.log(dna[0][1]);

    for (let i = 0; i < dna[0].length; i++) {
        for (let j = 0; j < dna.length; j++) {
            cadena += dna[j][i];
        }
        //console.log(cadena);
        
        const arrayFila = cadena.split('');
            //console.log('matriz ' , arrayFila);
            let repeticiones = 0;
            let letra = "";

            arrayFila.map((c)=>{
                console.log(c);
                if(c==letra){
                    repeticiones++;
                } else {
                    letra =c;
                };
            });
            //console.log(repeticiones)

            if(repeticiones >= 3){
                numMutantes++;     
            }
            
        //console.log('numero secuencias mutantes V: ' + numMutantes);
        cadena=''
    }

    return numMutantes;

};

function findMutantD(dna){
    const filas = dna.length ;
    const columnas = dna[0].length ;
    console.log('diagonales');
    console.log(`col:${columnas} -- filas:${filas}`);
    let numMutantes = 0;

    numMutantes =  valida_izq_inferior(dna, filas, columnas);
    numMutantes += valida_izq_superior(dna, filas, columnas);
    
    return numMutantes;
};

function  valida_izq_inferior(dna, filas, columnas){
    // busqueda oblicua por izquierda - inferior
    let pos_ini = filas -4;
    //console.log('pi '+ dna);
    let fila_pos=0;
    let columna_sec = columnas;
    let numMutantes = 0;

    while (fila_pos <= pos_ini) {
        fila_sec = fila_pos;
        console.log(`fila_pos: ${fila_pos}`);
        //columna inicial
        let cadena ='';
        console.log(`col sec ${columna_sec} en fila_pos ${fila_pos}`);

        for (let i = 0; i < columna_sec; i++) {
            console.log(`fila_pos: ${fila_sec} col: ${i} :: ${dna[fila_sec][i]}`);
            cadena += dna[fila_sec][i];
            fila_sec++;
        }
        console.log(cadena);
        
        numMutantes += validaRepetidos(cadena);
        
        console.log('numero secuencias mutantes D IZQ INF: ' + numMutantes);
        cadena='';

        columna_sec--;
        fila_pos++;
    };

    return numMutantes;

};

function valida_izq_superior(dna,filas,columnas){
    // busqueda oblicua por izquierda - superior
    console.log('superior');
    pos_ini = filas -4;
    //console.log('pi '+ dna);
    fila_pos=0;
    columna_sec = columnas;
    let numMutantes = 0;

    while (fila_pos <= pos_ini) {
        fila_sec = fila_pos;
        //console.log(`fila_pos: ${fila_pos}`);
        //columna inicial
        let cadena ='';
        //console.log(`col sec ${columna_sec} en fila_pos ${fila_pos}`);

        for (let i = 1; i < columna_sec; i++) {
            console.log(`fila_pos: ${fila_sec} col: ${i} :: ${dna[fila_sec][i]}`);
            cadena += dna[fila_sec][i];
            fila_sec++;
        };

        console.log(cadena);
        numMutantes += validaRepetidos(cadena);
        
        console.log('numero secuencias mutantes D IZQ SUP: ' + numMutantes);
        cadena=''

        columna_sec--;
        fila_pos++;
    };

    return numMutantes;
};

function  valida_der_inferior(dna, filas, columnas){
    // busqueda oblicua por izquierda - inferior
    let pos_ini = filas -4;
    //console.log('pi '+ dna);
    let fila_pos=0;
    let columna_sec = columnas;
    let numMutantes = 0;

    while (fila_pos <= pos_ini) {
        fila_sec = fila_pos;
        console.log(`fila_pos: ${fila_pos}`);
        //columna inicial
        let cadena ='';
        console.log(`col sec ${columna_sec} en fila_pos ${fila_pos}`);

        for (let i = 0; i < columna_sec; i++) {
            console.log(`fila_pos: ${fila_sec} col: ${i} :: ${dna[fila_sec][i]}`);
            cadena += dna[fila_sec][i];
            fila_sec++;
        }
        console.log(cadena);
        
        numMutantes += validaRepetidos(cadena);
        
        console.log('numero secuencias mutantes D IZQ INF: ' + numMutantes);
        cadena='';

        columna_sec--;
        fila_pos++;
    };

    return numMutantes;

};

function validaRepetidos(cadena){
    const arrayFila = cadena.split('');
    console.log('matriz ' , arrayFila);
    let repeticiones = 0;
    let letra = "";

    arrayFila.map((c)=>{
        console.log(c);
        if(c==letra){
            repeticiones++;
        } else {
            letra =c;
        };
    });
    console.log(repeticiones)

    if(repeticiones >= 3){
        return 1;     
    } else { 
        return 0;
    };
};



module.exports = isMutant;