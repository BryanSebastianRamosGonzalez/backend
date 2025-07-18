const exppress = require('express');
const router = exppress.Router();
const { obtenerUsuario, crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario, obtenerUsuariosMunicipio } = require('../controllers/usuariocontroller');

router.get('/:id', obtenerUsuario); // Obtener un usuario por ID
router.get('/', obtenerUsuarios); // Obtener todos los usuarios
router.post('/', crearUsuario); // Crear un nuevo usuario
router.put('/:id', actualizarUsuario); // Actualizar un usuario por ID
router.delete('/:id', eliminarUsuario); // Eliminar un usuario por ID
router.get('/usuarios/municipio/:municipioid', obtenerUsuariosMunicipio); // Obtener usuarios por municipio

module.exports = router; // Exportar el router para usarlo en otros archivos