// video 5 
//Crating enrutadores
const { Router } = require('express');
const router = Router();

//Esto son modulos controles con los methodos creados que tienen los objetos que guardarn las rutas
const { getUsers, createUsers,getUser,updateUsers,deleteUsers } = require('../controllers/users.controller');


router.route('/') // el / significa  /api/note viene de app.js 
    .get(getUsers)
    .post(createUsers)



router.route('/:id')
    .delete(deleteUsers)



module.exports = router;