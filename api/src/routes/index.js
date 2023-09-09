const { Router } = require('express');
const videoGameRouter = require('./videogames')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoGameRouter)

module.exports = router;
