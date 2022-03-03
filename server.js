const path = require('path');
const app = require('./src/app.js');

console.log(path.join(__dirname + '/src/app.js'));

app.get('/', (req, res ) => {
    res.sendFile(path.join(__dirname + '/src/views/index.html'));
});

async function main(){
    const server = await app.listen(3000);
    const host = server.address().address;
    const port = server.address().port;
    console.log(`'listen in http://'${host}:${port}`);
};

main();