const {Router} = require('express');
const router = Router();
const app = require('../app')
const mt = require('../controllers/mutant_ctl');
const archivo = require('../controllers/json_ctl');

router.post('/mutant', (req, res) =>{
    console.log('mutante');
    const dna =  req.body;
    console.log('entra al procedimiento');
    const dnatext = JSON.stringify(dna);
    console.log('string: ' +  dnatext.dna);
    const cantidadMutante = mt.isMutant(dnatext);
    console.log('cadenas mutantes: ' + cantidadMutante[0]);

    if(cantidadMutante[0] > 1){
        console.log('Es mutante ' + dnatext["intentos"]);
        res.status(200).send(`Este ADN es mutante, tiene ${cantidadMutante[0]} cadenas de ADN repetidas: \n ${cantidadMutante[1]}`);
        archivo.saveAdn(cantidadMutante[2],"Mutante");
    } else if(cantidadMutante[0] < 0 ) {
        console.log('Caracteres no válidos');
        res.status(403).send(`Este ADN tiene las siguientes letras no válidas: ${cantidadMutante[1]}. Por favor verifique y asegúrese que solo contenga las letras A,T,C y G`);
    } 
    else {
        console.log('No es mutante ' + dnatext.intentos);
        res.status(403).send(`Este ADN NO es mutante, tiene ${cantidadMutante[1]} de ADN repetida`);
        archivo.saveAdn(cantidadMutante[2],"No mutante");
    };
});

router.get("/stats", (req, res) => {
    let indicador = archivo.stats();
    res.send(indicador);
});

module.exports = router;