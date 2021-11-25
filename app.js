const express = require('express');
const app = express();

// BodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de Mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://steff:12345@cluster0.a8dxh.mongodb.net/Mx_Movies");
mongoose.set('debug', true);

// Importar Modelos - Esquemas
require('./models/Movie');


// Configuración de Rutas
app.use('/mx_movies', require('./routes/movies'));

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando ${PORT}`);
});