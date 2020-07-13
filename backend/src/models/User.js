//video 7

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        requires: true,
        trim: true,
        unique: true
    }
},
    {
        timestamp: true,  // guarda la fecha de creacion y de actualizacion en el cambio de el squema
    })


    const User = mongoose.model('User',userSchema); 


    module.exports = User;