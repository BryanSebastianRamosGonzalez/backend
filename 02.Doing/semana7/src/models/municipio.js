const mongoose = require('mongoose');

const MunicipioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        maxLength: 250,
        required: true,
    },
    estadoid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado', // Referencia al modelo Estado
        required: true
    }
});

const Municipio = mongoose.model('Municipio', MunicipioSchema); // aqui se crea el modelo de municipio, lo que eta entre comillado es el nombre, y MunicipioSchema es el esquema que hemos definido

module.exports = Municipio; // Aqui exporte el modelo para poder usarlo en otros archivos
