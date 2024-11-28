const express = require('express');
const mysqli = require('mysql2');
const bodyPaser = require('body-paser');

// AQUI app UTILIZARA LAS COSAS DE EXPRESS
const app = express();

// ANALIZA LOS DATOS DEL CUERPO DE LAS SOLICITUDES HTTP, ESPECIFICAMENTE
// LOS DATOS QUE 
app.use(bodyPaser.urlencode({extend: false}));