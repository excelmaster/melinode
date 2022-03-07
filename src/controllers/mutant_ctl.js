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
        let cantidad =0;

        switch (ciclo) {
            case 0: // repetidos vertical
                if(filas >=4){
                    cantidad = findMutantV(dnaTxt);
                    resultado += ` - ${cantidad} cadena(s) vertical(es) \n`;
                    numMutaciones = cantidad;
                }                
                break;
            case 1: // repetidos horizontal
                if(columnas >=4){
                    cantidad = findMutantH(dnaTxt);    
                    resultado += ` - ${cantidad} cadena(s) horizontal(es) \n`;
                    numMutaciones += cantidad;
                }                
                break;
            case 2: // repetidos diagonal
                console.log(`col ${columnas} fila ${filas}`);
                if(columnas >=4 && filas >=4){
                    cantidad = findMutantD(dnaTxt);    
                    resultado += ` - ${cantidad} cadena(s) diagonal(es) \n`;
                    numMutaciones += cantidad;
                }                
                break;
        };

        if (numMutaciones > 1 || ciclo >2){
            salir = true;
        }
        ciclo++;
    };

    console.log(dnaTxt); 
    const resMutante = [numMutaciones, resultado]; 
    return resMutante;  
};

function crear_array(dna){
    const texto_dna = dna.split(':')[1].replace("}","");
    const matriz_dna = JSON.parse(texto_dna);
    return matriz_dna;
};

function findMutantH(dna){
    let numMutantes = 0;
    let cadena ='';

    dna.map((fila)=>{ 
        console.log('string:: ' + fila);
        numMutantes += validaRepetidos(fila.toString().toUpperCase());
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
            cadena += dna[j][i].toupperCase;
        }
        console.log(`cadena Vertical: ${cadena}`);
        numMutantes += validaRepetidos(cadena);
            
        //console.log('numero secuencias mutantes V: ' + numMutantes);
        cadena='';
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
    numMutantes += valida_der_inferior(dna, filas, columnas);
    numMutantes += valida_der_superior(dna, filas, columnas);

    return numMutantes;
};

function  valida_izq_inferior(dna, filas, columnas){
    // busqueda oblicua por izquierda - inferior
    let pos_ini = filas -4;
    console.log('pi '+ pos_ini);
    let fila_pos=0;
    let columna_sec = filas;
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
        
        numMutantes += validaRepetidos(cadena.toUpperCase());
        
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
    columna_sec = filas-1;
    let numMutantes = 0;

    while (fila_pos < pos_ini) {
        fila_sec = 0;
        console.log(`fila_pos: ${fila_pos}`);
        console.log('--------------------------------');
        //columna inicial
        let cadena ='';
        console.log(`col sec ${columna_sec} en fila_pos ${fila_pos}`);

        for (let i = fila_pos+1; i < columnas; i++) {
            console.log(`fila_pos: ${fila_sec} col: ${columna_sec + i} :: ${dna[fila_sec][i]}`);
            cadena += dna[fila_sec][i];
            fila_sec++;
        };

        console.log(cadena);
        numMutantes += validaRepetidos(cadena.toUpperCase());
        
        console.log('numero secuencias mutantes D IZQ SUP: ' + numMutantes);
        cadena=''

        //columna_sec--;
        fila_pos++;
    };

    return numMutantes;
};

function  valida_der_inferior(dna,filas,columnas){

    // busqueda oblicua por derecha - inferior
    let pos_ini = filas -4;
    //console.log('pi '+ dna);
    let fila_pos=0;
    let columna_sec = columnas-1;
    let numMutantes = 0;

    while (fila_pos <= pos_ini) {
        fila_sec = fila_pos;
        //console.log(`fila_pos: ${fila_pos}`);
        //columna inicial
        let cadena ='';
        console.log(`col sec ${columna_sec} en fila_pos ${fila_pos}`);
        console.log(columna_sec-1);

        for (let i = columnas-1; i >= fila_pos ; i--) {
            console.log(`fila_pos: ${fila_sec} col: ${i} :: ${dna[fila_sec][i]}`);
            cadena += dna[fila_sec][i];
            fila_sec++; 
        }
        console.log(cadena.toUpperCase());
        
        numMutantes += validaRepetidos(cadena.toUpperCase());
        
        console.log('numero secuencias mutantes D Der INF: ' + numMutantes);
        cadena='';

        columna_sec--;
        fila_pos++; 
    };

    return numMutantes;
    
};

function valida_der_superior(dna,filas,columnas){

    console.log(`col:${columnas} -- filas:${filas}`);
    // busqueda oblicua por izquierda - superior
    console.log('superior');
    pos_ini = columnas -4;
    //console.log('pi '+ dna);
    fila_pos=0;
    columna_sec = columnas-2;
    let numMutantes = 0;

    while (fila_pos < pos_ini) {
        console.log('--------------------------------');
        fila_sec = 0;
        console.log(`fila_pos: ${fila_pos}`);
        console.log(`pos_ini: ${pos_ini}`);
        
        //columna inicial
         let cadena ='';
        console.log(`col sec ${columna_sec} en fila_pos ${fila_sec}`);

        for (let i = 0 ; i <= columna_sec; i++) {
            console.log(`fila_pos: ${fila_sec} col: ${columna_sec -i} :: ${dna[fila_sec][columna_sec -i]}`);
            cadena += dna[fila_sec][columna_sec -i];
            fila_sec++;
        };

        console.log(cadena);
        numMutantes += validaRepetidos(cadena.toUpperCase());
        
        console.log('numero secuencias mutantes D DER SUP: ' + numMutantes); 
        cadena=''

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
    let contador = 0;
    console.log(`inicio repeticiones: ${repeticiones}`);

    arrayFila.map((c)=>{
        console.log(`valor evaluado: ${c} :: ${c == letra}`);
        if(c==letra){
            repeticiones++;
        } else {
            letra =c;
            if (repeticiones >=3) {
                contador++;
                console.log('\n ### secuencia encontrada ###### \n');
            }
            repeticiones=0;
        };
    });
    console.log(`contador: ${contador}`);

    if(contador > 0 ){
        return 1;     
    } else { 
        return 0;
    };
};

module.exports = isMutant;