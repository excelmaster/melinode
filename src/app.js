const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// -- config --
//settings
app.set('port', '5000');
app.set('views',path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require(path.join(__dirname + '/routes/index.js')));

//Static
app.use(express.static('./public'));

// 404 status handler
app.use((req,res,next)=>{
    res.status(404).send('404 not found');
});

module.exports= app;