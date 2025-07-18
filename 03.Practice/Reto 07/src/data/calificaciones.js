const mongoose = require('mongoose');

const calificacionSchema = new mongoose.Schema({
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante', required: true },
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  nota: { type: Number, required: true }
});

module.exports = mongoose.model('Calificacion', calificacionSchema);
