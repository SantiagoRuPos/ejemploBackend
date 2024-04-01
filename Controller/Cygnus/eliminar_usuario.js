const {exec} = require('child_process');

exports.eliminar_usuario = (req, res) => {
  const { nombreUsuario, contrasena } = req.body;

  exec(`sudo userdel ${nombreUsuario}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al eliminar el usuario: ${error.message}`);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
    if (stderr) {
      console.error(`Error al eliminar el usuario: ${stderr}`);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
    console.log(`Usuario eliminado correctamente: ${nombreUsuario}`);
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  });
};
