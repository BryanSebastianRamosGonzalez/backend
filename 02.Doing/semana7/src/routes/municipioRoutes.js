/**
 * Rutas de Municipios - Semana 7
 *
 * Define todas las rutas para el manejo de municipios usando Express Router.
 * Implementa operaciones CRUD completas:
 * - GET /municipios - Obtener todos los municipios
 * - GET /municipios/:id - Obtener municipio por ID
 * - GET /municipios/estado/:estadoId - Obtener municipios por estado
 * - POST /municipios - Crear nuevo municipio
 * - PUT /municipios/:id - Actualizar municipio
 * - DELETE /municipios/:id - Eliminar municipio
 */

const express = require('express');
const router = express.Router();

// Importar controladores
const {
  obtenerMunicipios,
  obtenerMunicipio,
  obtenerMunicipiosPorEstado,
  crearMunicipio,
  actualizarMunicipio,
  eliminarMunicipio
} = require('../controllers/municipioController.js');

// ===== RUTAS DE MUNICIPIOS =====

router.get('/', obtenerMunicipios);
router.get('/:id', obtenerMunicipio);
router.post('/', crearMunicipio);
router.put('/:id', actualizarMunicipio);
router.delete('/:id', eliminarMunicipio);
router.get('/estado/:estadoid', obtenerMunicipiosPorEstado);

module.exports = router;