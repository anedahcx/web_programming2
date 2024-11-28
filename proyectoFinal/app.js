const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Puerto
const port = 3036;
// Instanciar 
const app = express();
app.use(bodyParser.urlencoded({ extend: false }));
// Analizar los datos del cuerpo de las solicitudes HTTP, específicamente los datos que provienen de formularios HTML enviados a través de POST y GET.

app.use(express.static('public'));

// Motor de plantillas para html de forma dinámica
app.set('view engine', 'ejs');

// Credenciales para DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: '3306'
});

// Conexión a la DB
db.connect(err => {
    if (err) {
        console.log(`Error al hacer conexión: ${err}`);
    } else {
        console.log('Conexión realizada');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor está en escucha desde http://localhost:${port}`);
});

// Mostrar lista de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Error al recuperar datos -> Código de error: ${err}`);
            res.send('Error al recuperar datos');
        } else {
            res.render('index', { users: results }); // Solo se renderiza la lista de usuarios
        }
    });
});

//Ruta para mostrar la página de agregar usuario**
app.get('/add', (req, res) => {
    res.render('add'); 
});

// **Ruta para agregar usuario (POST)**
app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error(`Error al insertar usuario: Código -> ${err}`);
            res.send('Error');
        } else {
            res.redirect('/'); // Redirige al listado de usuarios
        }
    });
});

// Editar usuario (muestra el formulario con los datos del usuario)
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error en la DB');
            res.send("Error en la DB");
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Editar usuario 
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    // Consulta SQL para actualizar el usuario
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error(`Error al actualizar usuario: Código -> ${err}`);
            res.send('Error');
        } else {
            res.redirect('/');  
        }
    });
});

//Eliminar usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error en el Delete');
            res.send("Error al eliminar");
        } else {
            res.redirect('/');
        }
    });
});