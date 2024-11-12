const path = require('path');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

// base de datos
dbConnection();

// cors
app.use(cors());

// directorio público
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// rutas
app.use('/api/auth', require('./routes/auth'));

// CRUD: Eventos
app.use('/api/events', require('./routes/events'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
