const fs =require('fs');
const path = require('path');

function saveAdn(dna, estado){
    console.log('path: ' + path.join(__dirname, '../','/data/adn.json' ));
    let data = fs.readFileSync( path.join(__dirname, '../','/data/adn.json' ));
    let records = JSON.parse(data);
    console.log('dna: ' , dna.toString());
    console.log('records: ' + records);
     let index = -1;
    let cantidad = 0;
    let cadenaBusqueda = dna.toString();
    console.log('cb: ' , cadenaBusqueda);
    console.log('pri= ' , records["intentos"])
    console.log('------------')

    records["intentos"].find(function(record,i){
        console.log('rc= ' , record.dna);
        console.log('cb:' , cadenaBusqueda , ' -- ' , i);
        console.log('dn: ' + record.dna);
        if(record.dna == cadenaBusqueda){
            index = i;
            cantidad=record.cantidad;
        };
    });

    console.log('index:' + index + '  cant: ' + cantidad);

    if(index == -1){
        console.log('nuevo registro')
        let newRecord = new Object(); 
        newRecord.dna= dna.toString();
        newRecord.estado = estado;
        newRecord.cantidad= 1;
        records["intentos"].push(newRecord);
    } else {
        console.log('actualizar');
        let cantidad =records["intentos"][index].cantidad + 1;
        records["intentos"][index].cantidad = cantidad;
    };
    console.log('rec' + records);
    jsonData  = JSON.stringify(records);

    fs.writeFile( path.join(__dirname, '../','/data/adn.json' ), jsonData, (error)=>{
        if (error) {
            console.log(`error: ${error}`);
            return 0;
        } else {
            console.log(`registro almacenado correctamente`);
            return 1;
        }
    });
};

function stats(){
    console.log('path: ' + path.join(__dirname,'../', '/data/adn.json' ));
    let data = fs.readFileSync( path.join(__dirname, '../','/data/adn.json' ));
    console.log(data);
    let records = JSON.parse(data);
    //console.log(records);
    let mutante = 0;
    let humano = 0;

    records["intentos"].map(record=> {
        if(record.estado == "Mutante"){
            mutante+= record.cantidad;
        } else {
            humano+= record.cantidad;
        };
    });
    let ratio = Math.fround((( mutante / humano )*100)/100);

    let salida = `{
        "count_mutant_dna": ${mutante},
        "count_human_dna": "${humano}",
        "ratio": ${ratio}
    }`;
    console.log(salida);
    /* let salida = new Object();
    salida.count_mutant_dna = mutante;
    salida.count_human_dna = humano;
    salida.ratio =Math.fround((( salida.count_mutant_dna / salida.count_human_dna)*100)/100); */
    return JSON.parse(salida);
}; 

module.exports.saveAdn = saveAdn;
module.exports.stats = stats;