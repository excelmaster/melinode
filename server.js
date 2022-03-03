const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

const server  = app.listen(process.env.PORT || 8080, () =>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`'listen in http://'${host}:${port}`);
});