// POST http://localhost:3000/contar Esta es la ruta para testear
import express from 'express';
import { contarPropiedades } from './controllers/contarController.js';

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta POST
app.post('/contar', contarPropiedades);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
