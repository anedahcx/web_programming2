const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

router.get('/about', (req, res) => {
    res.sendFile('about.html', { root: __dirname });
});

router.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: __dirname });
});

module.exports = router;