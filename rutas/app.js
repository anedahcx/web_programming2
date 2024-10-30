const express = require('express');
const app = express();
const port = 3050;

const routes = require('./routes');

app.use('/', routes);

app.use(express.static('routes'));

app.listen(port, () => {
    console.log(`Escucha el servidor desde http://localhost:${port}`);
});