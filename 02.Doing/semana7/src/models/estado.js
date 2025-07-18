const mongoose = require ('mongoose');

const EstadoSchema = new mongoose.Schema({
    nombre: {
        type:String,
        maxLenght: 250,
        required: true,
        unique: true,
    }
}); 

const Estado = mongoose.model('Estado', EstadoSchema); // aqui se crea el modelo de estado, lo que eta entre comillado es el nombre, y EstadoSchema es el esquema que hemos definido

module.exports = Estado; // Aqui exporte el modelo para poder usarlo en otros archivos