//video 6 y parte del 7 
//la idea es almacenar en un objeto todas las funciones que esta relacionadas con las notas 
// estoy pasando las rutas aca para que quede ordenado luego estos metodos son exportados a sus respectivas rutes

//creamos un objeto  // utilizamos con la notacion de puntos
const notesCtrl = {};

//Despues de hacer el modelo lo exporto al controlador 
const Note = require('../models/Note');

// estoy pasando GET de la line 6 en notes.js para ser administrado por el controlador 
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

// POST
notesCtrl.createNotes = async (req, res) => {
    console.log(req.body); // represnta los datos que envia el cliente es todo el cuerpo del objeto
    const { title, content, date, author } = req.body; // estoy sacando las partes del objeto que vienen del body
    const newNote = new Note({ // para crear una nueva nota // esta objeto viene del modelo Note.js
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();  // para salvar nueva notas
    console.log(newNote)

}


// Obtener una nota por ID 
notesCtrl.getNote = async (req, res) => {
    console.log(req.params.id) // me perimite ver el id de consola// el id los especifique en las rutas note.js linea 16 
    const note = await Note.findById(req.params.id); // De nuevo el metodo te permite buscar la nota utilizando el metodo  findById
    res.json(note)
}


//El updtate es un cambinacion de crear y el eliminar o obtner una nota// necesitamos el id y los datos que quiero actualizar
notesCtrl.updateNotes = async (req, res) => {
   await Note.findOneAndUpdate(req.params.id, req.body)
    console.log(req.params.id, req.body)
    res.json()
}



//
notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete (req.params.id);
        res.json()
}






// estoy exportando los methodos creados
module.exports = notesCtrl;