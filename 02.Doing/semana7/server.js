const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./src/routes/index'); // Importar las rutas

const app = express();
const port = 3000;

// Middleware global 

// Parse de JSON 

app.use(express.json());

// Conexión a la base de datos MongoDB

mongoose.connect('mongodb://localhost:27017/semana7_db')
.then(() => {
    console.log('Conectado a la base de datos MongoDB');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos MongoDB:', error);
});

// Rutas de la API


// Ruta raíz de bienvenida 
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Gestión de Usuarios',
        version: '1.0.0',
        api: '/api',
    });
});

// Todas las rutas de la api bajo el prefijo /api
app.use('/api', apiRoutes);

// iniciar el servidor 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});