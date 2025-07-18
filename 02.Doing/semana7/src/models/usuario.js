const mongoose = require("mongoose");

// en este ejemplo pondre un campo para nombre completo, tendra especificaciones concretas
const UsuarioSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
    maxlength: 140,
    minlength: 2,
    trim: true, // elimina espacios al inicio y al final
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true, //esto es para que no se repita
    lowercase: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // valida el formato del email
  },
   municipioid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Municipio', // Referencia al modelo municipio
          required: true
      }
});

const Usuario = mongoose.model("Usuario", UsuarioSchema); // aqui se crea el modelo de usuario, lo que eta entre comillado es el nombre, y UsuarioSchema es el esquema que hemos definido

module.exports = Usuario; // Aqui exporte el modelo para poder usarlo en otros archivos
// Esto es lo que se usa para crear un nuevo usuario en la base de datos
