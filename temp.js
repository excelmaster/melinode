

function valida_der_superior(dna,filas,columnas){
    dna = ["ATGCGAta","CATTGCcg","TCATGTgc","AGCATGca","CCCCGCcc","TCACCGgg","AGACGGca","AGAAGGca"];
    //const dna = [ 'ATGCGA' ];
    filas = dna.length ;
    columnas = dna[0].length ;
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

valida_der_superior();