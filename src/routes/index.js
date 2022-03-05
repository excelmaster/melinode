const {Router} = require('express');
const router = Router();
const app = require('../app')
const isMutant = require('../controllers/mutant_ctl');

router.get('/', (req,res)=>{
    res.render("mutant_ui.ejs");
});

router.post('/mutant', (req, res) =>{
    console.log('mutante');
    const dna =  req.body;
    console.log('entra al procedimiento');
    const dnatext = JSON.stringify(dna);
    const cantidadMutante = isMutant(dnatext);
    console.log('cadenas mutantes: ' + cantidadMutante);

    if(cantidadMutante[0] > 1){
        console.log('Es mutante');
        res.status(200).send(`Este ADN es mutante, tiene ${cantidadMutante[0]} cadenas de ADN repetidas: \n ${cantidadMutante[1]}`);
    } else {
        console.log('No es mutante');
        res.status(403).send(`Este ADN NO es mutante, tiene ${cantidadMutante[0]} cadena de ADN repetida`);
    };
});

module.exports = router;