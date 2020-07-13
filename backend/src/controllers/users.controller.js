//video 6 y 7
//la idea es almacenar en un objeto todas las funciones que esta relacionadas con las notas 
// estoy pasando las rutas aca para que quede ordenado luego estos metodos son exportados a sus respectivas rutes

//creamos un objeto  // utilizamos con la notacion de puntos
const usersCtrl = {};

//Despues de hacer el modelo lo exporto al controlador 
const User = require('../models/User')


// estoy pasando GET de la line 6 en notes.js para ser administrado por el controlador 
usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
    res.json(users)
}


//Post  // usa el req.boy 
usersCtrl.createUsers = async (req, res) => {
    const { username : username} = req.body;
    const newUser =  new User( { // creando un nuevo usurario
        username : username,
    });
    await newUser.save(); // para guardarlo 
    res.json('User Created' );
}

// delet usa el eq.params.id elimina por ide
usersCtrl.deleteUsers = async (req, res) => {
   User.findOneAndDelete(req.params.id);
    res.json('Users Deleted')
}

// estoy exportando los methodos creados
module.exports = usersCtrl;