//video 2a  definimos el servidor

// Dpendecies
const express = require('express'); 
const cors = require('cors');
const app = express();


//Video 4

//Setings
app.set('port', process.env.PORT || 4000); // si esxite un puerto con variable de entorno lo vamos a tomar ||(or) usa el 4000



//middlewares // son funciones que se ejecutan antes de llegar a las rutas (url)
app.use(cors());
app.use(express.json()); // es para que el servidor entienda formaton json


//video 4 y 5 
//routes // son rutas que no interaccionan con el usuario son para conectar el servidor
app.use('/api/users', require('./routes/users')); // esto viene de routas en user.js 
app.use('/api/notes', require('./routes/notes'));// esto viene de routas en user.js 







 module.exports = app;








