import express from 'express';
import { logger } from './src/middlewares/logger.js';
import { loadData } from './src/storage.js';
import usersRouter from './src/routes/usersRoutes.js';



const PORT = 3000;
await loadData();

const app = express();

app.use(express.json());

app.get('/:name', logger, (req, res) => {
    if (req.query.isAdmin === 'true'){
        res.end(`Welcome Admin ${req.params.name} to your api`)
    } else {
        (`Welcome ${req.params.name} api`)
    }
    res.end('Hola');
});

app.use('/api', usersRouter);

app.get('/saludo/:name', logger, (req,res) =>{
    const { name } = req.params;

    res.json({mensaje: `Hola ${ name}`})

});


//http://localhost:3000/api/edad?anioNacimiento=1996
app.get('/api/edad', logger, (req,res) =>{
    const anioNacimiento = parseInt(req.query.anioNacimiento);
    const actual = new Date().getFullYear();

    if(!anioNacimiento || anioNacimiento >= actual){
        return res.status(400).json({mensaje: 'Año invalido'});
    }
    const edad = actual - anioNacimiento;

    res.json({anioNacimiento, edad});
});

app.get('/suma/:a/:b', logger, (req,res) => {
    const {a,b} = req.params;
    const suma = Number(a) + Number (b);
    if(isNaN(suma)){
        return res.status(400).json({mensaje: 'Parametros invalidos'});
    }

    res.json({ a, b, 'es igual a': suma });

})

app.get('/perfil/:usuario', logger, (req, res) => {
    const { usuario } = req.params;
    const { lang }= req.query;

    let mensaje = `Welcome ${usuario}` ;

    if (lang === 'es'){
        mensaje = `Bienvenido ${usuario}`;
    } 
    if (lang === 'fr'){
        mensaje = `Bienvenu ${usuario}`;

    } else {
        mensaje = ` Lenguaje inavalido ${usuario}`
    }

    res.json({ mensaje, lenguage: lang || 'default'})
});

app.get('/api/buscar', logger, (req, res) => {
    const {producto, categoria} = req.query;
    if (!producto || !categoria){
        return res.status(400).json ({mensaje: 'Faltan parametros en la ruta'})
    };

    res.json({
        busqueda: producto,
        categoria, 
        mensaje: `Buscando ${producto}, en la categoria ${categoria}...`
    })
})

app.listen(PORT, () => {
    console.log(`Server running en http://localhost:${PORT}`);
})