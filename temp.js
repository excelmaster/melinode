
function  valida_der_inferior(){
    const dna = ["ATGCGA","CATTGC","TTATGC","CCCCCC","CCCCCC","CCCCCC"];
    //const dna = [ 'ATGCGA' ];
    const filas = dna.length ;
    const columnas = dna[0].length ;
    console.log(`col:${columnas} -- filas:${filas}`);

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
        console.log(cadena);
        
        numMutantes += validaRepetidos(cadena);
        
        console.log('numero secuencias mutantes D IZQ INF: ' + numMutantes);
        cadena='';

        columna_sec--;
        fila_pos++; 
    };
    
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

valida_der_inferior();