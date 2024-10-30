const express = require('express');
const path = require("path");

const app = express();

app.get('/', (req, res) => {
    //res.send('Hola desde Express');
    //res.sendFile("C:/Users/Aned/Documents/codeAned/Universidad/web_programming2/node/express/index.html");
    res.sendFile(__dirname + "/index.html");
});

const port = 3056;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});