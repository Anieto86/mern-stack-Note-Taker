//video 7
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        require: true,
    }
}, {
    author: String,
    date :{
        type: Date,
        default: Date.now
    }
},
    {
        timestamp: true, 
    })

const Note = mongoose.model('Note', noteSchema); 


module.exports = Note;