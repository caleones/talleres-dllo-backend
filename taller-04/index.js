const express = require('express');
const app = express();

app.use(express.json());

let usuarios = require('./24-taller-04-datos.json');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

app.get('/users/hobby', (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) return res.status(400).json({ error: 'Debe enviar un hobby' });

    const result = usuarios.filter(user => user.hobbies.includes(hobby));
    res.json(result);
});

app.get('/users/exists', (req, res) => {
    const codigo = req.query.codigo;
    if (!codigo) return res.status(400).json({ error: 'Debe enviar un código' });

    const exists = usuarios.some(user => user.codigo === codigo);
    res.json({ exists });
});

app.get('/users/hobby/count', (req, res) => {
    const hobby = req.query.hobby;
    if (!hobby) return res.status(400).json({ error: 'Debe enviar un hobby' });

    const count = usuarios.filter(user => user.hobbies.includes(hobby)).length;
    res.json({ count });
});

app.get('/users/is-free', (req, res) => {
    const freeUsers = usuarios.filter(user => user.hobbies.length < 3);
    res.json(freeUsers);
});

app.post('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body;
    if (!codigo || !hobby) {
        return res.status(400).json({ error: 'Debe enviar el codigo y el hobby' });
    }

    const user = usuarios.find(user => user.codigo === codigo);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    if (user.hobbies.length >= 3) {
        return res.json({ message: 'El usuario ya tiene 3 hobbies, no se puede agregar otro' });
    }

    if (!user.hobbies.includes(hobby)) {
        user.hobbies.push(hobby);
    }

    res.json(user);
});

app.post('/users', (req, res) => {
    const nuevoUsuario = req.body;

    if (!nuevoUsuario.codigo || !nuevoUsuario.nombre || !nuevoUsuario.apellido || !nuevoUsuario.hobbies) {
        return res.status(400).json({ error: 'Faltan datos del usuario' });
    }

    if (nuevoUsuario.hobbies.length < 2) {
        return res.status(400).json({ error: 'El usuario debe tener al menos dos hobbies' });
    }

    if (usuarios.some(user => user.codigo === nuevoUsuario.codigo)) {
        return res.status(400).json({ error: 'El usuario ya existe' });
    }

    usuarios.push(nuevoUsuario);
    res.json({ message: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
});
  
  