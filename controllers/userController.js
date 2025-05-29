const user_service = require('../services/userService');

const testUserAPI = (req, res) => {
    console.log('testUserAPI');
    res.status(200).send({
        status: "OK",
        message: "API User state: available"
    });
};

const getAllUsers = async (req, res) => {
    const users = await user_service.getAllUsers();
    if (users)
        res.status(200).send({
            status: "OK",
            message: "Usuarios",
            data: users
        });
    else
        res.status(400).send({
            status: "FAILED",
            message: "Error al traer los usuarios"
        });
};

const getOneUser = async (req, res) => {
    const id = req.params.id;
    const user = await user_service.getOneUser(id);
    if (user)
        res.status(200).send({
            status: "OK",
            message: "Usuario traído con éxito",
            data: user
        });
    else
        res.status(400).send({
            status: "FAILED",
            message: "Error al traer el usuario"
        });
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const createdUser = await user_service.createUser(name, email, password);
    if (createdUser)
        res.status(201).send({
            status: "OK",
            message: "Usuario creado",
            data: createdUser
        });
    else
        res.status(400).send({
            status: "FAILED",
            message: "No se pudo crear el usuario",
            data: createdUser
        });
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const updatedUser = await user_service.updateUser(id, name, email, password);
    if (updatedUser)
        res.status(200).send({
            status: "OK",
            message: "Usuario actualizado con éxito",
            data: updatedUser
        });
    else
        res.status(400).send({
            status: "FAILED",
            message: "Actualización fallida",
            data: updatedUser
        });
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await user_service.deleteUser(id);
    if (deletedUser)
        res.status(200).send({
            status: "OK",
            message: "Usuario eliminado con éxito",
            data: deletedUser
        });
    else
        res.status(400).send({
            status: "FAILED",
            message: "Eliminación fallida",
            data: deletedUser
        });
};

module.exports = {
    testUserAPI,
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};