const express = require('express');
const router = express.Router();

const {
  obtenerInfoCompleta,
  crearEstudiante,
  crearCurso,
  crearCalificacion
} = require('../controllers/calificacionesController');

router.get('/estudiantes-info', obtenerInfoCompleta);
router.post('/estudiantes', crearEstudiante);
router.post('/cursos', crearCurso);
router.post('/calificaciones', crearCalificacion);

module.exports = router;
