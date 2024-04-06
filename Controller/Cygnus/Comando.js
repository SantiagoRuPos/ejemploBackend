const { exec } = require('child_process');

exports.comando = (req, res) => {
    const { comando } = req.body;
    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error('Error al ejecutar el comando:', error);
            return res.status(500).json({ error: 'Error al ejecutar el comando' });
        }
        if (stderr) {
            console.error(`Error al ejecutar el comando: ${stderr}`);
            return res.status(500).json({ error: 'Error al ejecutar el comando' });
        }
       
        console.log(`Comando ejecutado correctamente: ${comando}`);
        console.log(`Resultado: ${stdout}`);
        res.status(200).json({ message: 'Comando ejecutado correctamente', resultado: stdout });
    });
};
