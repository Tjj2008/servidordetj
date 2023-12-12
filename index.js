const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://tnjofre:<thiago2008>@cluster0.9h3lukx.mongodb.net/')
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });


  const practicaSchema = new mongoose.Schema({
    nombre: String,
    edad: Number
  });
  
  const Practica = mongoose.model('practica');

app.get('/obtener-ejemplos', async (req, res) => {
    try {
      const ejemplos = await Practica.find();
      res.json(ejemplos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener ejemplos' });
    }
  });
  


app.listen(port, () => {
  console.log(`servidor siendo escuchado en el puerto 3000`);
});


