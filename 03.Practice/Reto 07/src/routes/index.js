const express = require('express');
const router = express.Router();

const calificacionesRoutes = require('./calificacionesRoutes');

router.use('/api', calificacionesRoutes);

module.exports = router;
