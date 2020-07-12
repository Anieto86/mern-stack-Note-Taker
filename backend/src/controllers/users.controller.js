//video 6 
//la idea es almacenar en un objeto todas las funciones que esta relacionadas con las notas 
// estoy pasando las rutas aca para que quede ordenado luego estos metodos son exportados a sus respectivas rutes

//creamos un objeto  // utilizamos con la notacion de puntos
const usersCtrl = {};

// estoy pasando GET de la line 6 en notes.js para ser administrado por el controlador 
usersCtrl.getUsers = (req, res) => res.json({ message: [] })
usersCtrl.createUsers = (req, res) => res.json({ message: 'Users Saved' })

usersCtrl.getUser = (req, res) => res.json({ message: 'One Users Saved' })

usersCtrl.updateUsers = (req, res) => res.json({ title: 'Users Updated' })
usersCtrl.deleteUsers = (req, res) => res.json({ message: 'Users Deleted' })

// estoy exportando los methodos creados
module.exports = usersCtrl;