const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose=require('mongoose')




const uri = 'mongodb+srv://tu_usuario:tu_contrasena@tu_cluster.mongodb.net/tu_base_de_datos';


mongoose.connect(uri)
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });


const practica = mongoose.model('practica', { nombre: String, edad: Number });


app.get('/agregar-ejemplo', async (req, res) => {
  await practica.create({ nombre: 'John Doe', edad: 30 });
  res.send('Ejemplo agregado a la base de datos');
});


app.get('/obtener-ejemplos', async (req, res) => {
  const ejemplos = await practica.find();
  res.json(ejemplos);
});


app.listen(port, () => {
  console.log(`anda d10`);
});


