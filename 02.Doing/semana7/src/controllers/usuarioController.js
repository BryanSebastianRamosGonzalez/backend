const usuario = require('../models/usuario');

// Obtener un solo usuario por ID
// GET /usuarios/:id
async function obtenerUsuario(req, res) {
    const user = await usuario.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
        res.json(user);
    }
}

// Crear un nuevo usuario
// POST /usuarios
// Body esperado: { nombreCompleto, email, municipioid }
async function crearUsuario(req, res) {
    try {
        const { nombreCompleto, email, municipioid } = req.body;
        if (!nombreCompleto || !email || !municipioid) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const newUser = await usuario.create({
            nombreCompleto,
            email,
            municipioid
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}

// Obtener todos los usuarios
// GET /usuarios
async function obtenerUsuarios(req, res) {
    const users = await usuario.find()
    .populate({
    path: 'municipioid',
    select: 'nombre', 
    populate:{
    path: 'estadoid',
    select: 'nombre'
  }
  })
    .sort({ nombreCompleto: 1 });  // Ordenar por nombreCompleto10
    res.json(users);
}

// Actualizar un usuario existente por ID
// PUT /usuarios/:id
// Body esperado: { nombreCompleto, email, municipioid }
async function actualizarUsuario(req, res) {
    try {
        const { nombreCompleto, email, municipioid } = req.body;
        if (!nombreCompleto || !email || !municipioid) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const updatedUser = await usuario.findByIdAndUpdate(req.params.id, req.body);

        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
}

// Eliminar un usuario por ID
// DELETE /usuarios/:id
async function eliminarUsuario(req, res) {
    try {
        const deletedUser = await usuario.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
}

async function obtenerUsuariosMunicipio(req, res){
    const municipioid = req.params.id;

    const users = await Usuario.find({ municipioid })
    .populate ({
        path: 'municipioid',
        select: 'name'
    })
    .sort({ nombreCompleto: 1 });

    res.json(users);
}

module.exports = {
    obtenerUsuario,
    crearUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
    obtenerUsuariosMunicipio
};
