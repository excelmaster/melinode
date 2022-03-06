

const dna = ["ATGCGA","CATTGC","TTATGT","AGAATG","CCCCTA","TCACTG"];
//const dna = [ 'ATGCGA' ];
const filas = dna.length ;
const columnas = dna[0].length ;
console.log(`col:${columnas} -- filas:${filas}`);

let numMutantes = 0;
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

console.log(numMutantes);