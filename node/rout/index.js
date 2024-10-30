const express = require('express');
const router = express.Router();

// DEFINICION DE LAS RUTAS  
router.get('/', (req, res) => {
    res.send("Hola desde mi ruta, pagina principal");
});

router.get('/', (req, res) => {
    res.send("Hola desde el registro");   
});

// GENERAR ARCHIVO EN UN MODULO PARA MANDARLO
module.exports = router;
