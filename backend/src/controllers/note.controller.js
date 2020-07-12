//video 6 
//la idea es almacenar en un objeto todas las funciones que esta relacionadas con las notas 
// estoy pasando las rutas aca para que quede ordenado luego estos metodos son exportados a sus respectivas rutes

//creamos un objeto  // utilizamos con la notacion de puntos
const notesCtrl = {};

// estoy pasando GET de la line 6 en notes.js para ser administrado por el controlador 
notesCtrl.getNotes = (req, res) => res.json({ message: [] })
notesCtrl.createNotes = (req, res) => res.json({ message: 'Note Saved' })

notesCtrl.getNote = (req, res) => res.json({ message: 'One Note Saved' })

notesCtrl.updateNotes = (req, res) => res.json({ title: 'Note Updated' })
notesCtrl.deleteNotes = (req, res) => res.json({ message: "Note Deleted" })

// estoy exportando los methodos creados
module.exports = notesCtrl;