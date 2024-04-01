// cygnus/userController.js
const { exec } = require('child_process');

exports.crearUsuario = (req, res) => {
  const { nombreUsuario, contrasena } = req.body;
  // Ejecutar el comando para crear el usuario en el servidor Linux
  exec(`sudo useradd ${nombreUsuario} && sudo passwd ${nombreUsuario}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al crear el usuario: ${error.message}`);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
    if (stderr) {
      console.error(`Error al crear el usuario: ${stderr}`);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
    console.log(`Usuario creado correctamente: ${nombreUsuario}`);
    res.status(200).json({ message: 'Usuario creado correctamente' });
  });
};
