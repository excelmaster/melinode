const path = require('path');
const app = require('./src/app.js');

console.log(path.join(__dirname + '/src/app.js'));

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname + '/src/views/index.html'));
});

const server  = app.listen(process.env.PORT || 8080, () =>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`'listen in http://'${host}:${port}`);
});