const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];


app.get('/usuarios', (req, res) => {
    res.send(usuarios);  
});


app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,  
        nombre: req.body.nombre,
        edad: req.body.edad,  
        lugarProcedencia: req.body.lugarProcedencia
    };
    usuarios.push(nuevoUsuario);
    res.send(nuevoUsuario);  
});


app.get('/usuarios/:nombre', (req, res) => {
    const usuario = usuarios.find(u => u.nombre === req.params.nombre);  
    if (!usuario) {
        res.send('Usuario no encontrado');  
    } else {
        res.send(usuario);  
    }
});


app.put('/usuarios/:nombre', (req, res) => {
    const usuario = usuarios.find(u => u.nombre === req.params.nombre);  
    if (!usuario) {
        res.send('Usuario no encontrado');  
    } else {
        usuario.nombre = req.body.nombre;  
        usuario.edad = req.body.edad;
        usuario.lugarProcedencia = req.body.lugarProcedencia;
        res.send(usuario);  
    }
});


app.delete('/usuarios/:nombre', (req, res) => {
    const usuarioIndex = usuarios.findIndex(u => u.nombre === req.params.nombre);  
    if (usuarioIndex === -1) {
        res.send('Usuario no encontrado');  
    } else {
        const usuarioEliminado = usuarios.splice(usuarioIndex, 1);
        res.send(usuarioEliminado);  
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');  
});
