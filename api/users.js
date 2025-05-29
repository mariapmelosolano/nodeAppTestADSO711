const db = require('../models');
const { Router } = require('express');
const router = Router();

// Ruta de prueba
router.get("/", (req, res) => {
    res.send({ Title: "Hello ADSO!" });
});

// Obtener todos los usuarios
router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send("No se pudieron obtener los usuarios");
    }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let user = await db.User.findByPk(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send('No se pudo obtener el usuario');
    }
});

// Crear un nuevo usuario
router.post('/new', async (req, res) => {
    let { name, email, password } = req.body;
    try {
        await db.User.create({ name, email, password });
        res.status(200).send('Usuario Creado');
    } catch (error) {
        res.status(400).send('Usuario no pudo ser creado');
    }
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let { name, email, password } = req.body;
        await db.User.update(
            { name, email, password },
            { where: { id } }
        );
        res.status(200).send("Usuario actualizado correctamente");
    } catch (error) {
        res.status(400).send("No se pudo actualizar el usuario");
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.User.destroy({ where: { id } });
        res.status(200).send("Usuario eliminado correctamente");
    } catch (error) {
        res.status(400).send("No se pudo eliminar el usuario");
    }
});

module.exports = router;