//video 2b  iniciar el servidor desde app

const app = require('./app');

//estoy viene de database video 3 (database.js) es para conectar la base de datos
require('./database')

// function  encarda de iniciar el progrma con escritara moderna para usar asyc/awaut
async function main() {
    await app.listen(app.get('port')); //video4 viene de app.js

    console.log('server listening', app.get('port'));
}

main();


