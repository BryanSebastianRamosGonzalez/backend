import express from 'express';
import {separar} from './utils/separarParesImpares.js';

const app = express();
const PORT = 3000;


// http://localhost:3000/separar?numeros=5,10,8,3 ruta para test
app.get( '/separar' , (req, res) => {
    const numeros = req.query.numeros ? req.query.numeros.split(',') : [];
    const resultado = separar(numeros);

    res.json({resultado})
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
