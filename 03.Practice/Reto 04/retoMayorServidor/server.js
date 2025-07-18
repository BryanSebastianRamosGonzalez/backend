import { mayor } from './utils/encontrarMayor.js'
import express from 'express';

const app = express();
const PORT = 3000;

//http://localhost:3000/mayor?numeros=5,10,8,3 ruta para test
app.get('/mayor', (req, res) => {
    const numeros = req.query.numeros ? req.query.numeros.split(',') : [];
    const resultado = mayor(numeros);
    
    res.json({ resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
