//video 3a 

require('./database')

const mongoose = require('mongoose')



// estamos creando una base de datos llamada mernstack
const URI = "mongodb://localhost/mernstack";


// conection to moongos via method connect()
mongoose.connect(URI, {
    useNewUrlParser: true, //son opicones para ayudar a conectar mongoose.
    useCreateIndex: true,

});


// cuando exita la connection mostra por consola DB is connected 
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("DB is connected");
})