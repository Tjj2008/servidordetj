// aca estamos importandi los modulos
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// definimos el esquema
const practicaSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

// aca estamos creando el modelo luego de haber definido el esquema
const Practica = mongoose.model('practica', practicaSchema);

// aca estamos estableciedno la conexion a la base de datos
mongoose.connect('mongodb+srv://tnjofre:<thiago2008>@cluster0.9h3lukx.mongodb.net/')
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });
 //aca vemos si no se conecto 
app.get('/obtener-ejemplos', async (req, res) => {
  try {
    const ejemplos = await Practica.find();
    res.json(ejemplos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ejemplos' });
  }
});
// aca muestra si el servidor esta corriendo
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto 3000`);
});
