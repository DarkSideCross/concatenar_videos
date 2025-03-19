const express = require('express');
const path = require('node:path');
const fs = require('node:fs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {

    res.render('index');

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000...');
})