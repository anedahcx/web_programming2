const express = require('express');
const routes = express.Router();

// Importando el modelo de la colección de usuarios
const app = express();
const port = 3099

app.use("/", routes);

app.listen(port, () => {
    console.log('port: ' + port);
});