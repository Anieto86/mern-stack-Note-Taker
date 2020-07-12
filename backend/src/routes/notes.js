// video 5 y 6
//Creting enrutadores
const { Router } = require('express');
const router = Router();

//Esto son modulos controloes con los methodos creados que tienen los objetos que guardarn las rutas
const { getNotes, createNotes,getNote,updateNotes,deleteNotes } = require('../controllers/note.controller');


router.route('/') // el / significa  /api/note viene de app.js 
    .get(getNotes)
    .post(createNotes)



router.route('/:id')
    .get(getNote)
    .put(updateNotes)
    .delete(deleteNotes)


module.exports = router;





// .post() // guardar un nuevo dato
//   .put() //actualizar un dato // todo el el objeto
//   .delete()
//   .patch()//actualizar una sola propiedad de un dato
