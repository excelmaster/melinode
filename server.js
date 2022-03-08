const path = require('path');
const app = require('./src/app.js');

console.log(path.join(__dirname + '/src/app.js'));

const server  = app.listen(process.env.PORT || app.get('port'), () =>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`'listen in http://'${host}:${port}`);
});