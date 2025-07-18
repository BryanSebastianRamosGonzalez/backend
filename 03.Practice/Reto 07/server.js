const express = require('express');
const mongoose = require('mongoose');
const rutas = require('./src/routes/index.js');

const app = express();
app.use(express.json());
app.use(rutas);

const MONGO_URI = 'mongodb://localhost:27017/relacionesDB';
const PORT = 3000;

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error al conectar MongoDB:', err);
  }
};

startServer();
