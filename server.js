// server.js
const express = require('express');
const cors = require('cors');

const crearUsuario = require('./Controller/Cygnus/userController');
const eliminar_usuario = require('./Controller/Cygnus/eliminar_usuario');
const listarImagenesDocker = require('./Controller/Cygnus/imagenes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.post('/crear-usuario', crearUsuario.crearUsuario);


app.post('/eliminar-usuario', eliminar_usuario.eliminar_usuario);


app.get('/listar-imagenes-docker', listarImagenesDocker.listarImagenesDocker);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
