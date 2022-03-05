

const dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
//const dna = [ 'ATGCGA' ];
const filas = dna.length ;
const columnas = dna[0].length ;
console.log(`col:${columnas} -- filas:${filas}`);

let numMutantes = 0;
let newarray = [];

// busqueda oblicua por izquierda
let pos_ini = filas -4;
//console.log('pi '+ dna);
let fila_pos=0;
let columna_sec = columnas;

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
        numMutantes++;     
    }
    
    console.log('numero secuencias mutantes D: ' + numMutantes);
    cadena=''

    columna_sec--;
    fila_pos++;
};





