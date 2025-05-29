const db = require('../models');

const getAllUsers = async () => {
    try {
        const allUsers = await db.User.findAll();
        return allUsers;
    } catch (error) {
        throw new Error(`Error al traer los usuarios ${error.message}`);
    }
};

const getOneUser = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error(`Error al traer el usuario con id ${id}`);
    }
};

const createUser = async (name, email, password) => {
    try {
        let newUser = await db.User.create({
            name,
            email,
            password,
        });
        return newUser;
    } catch (error) {
        return error.message || "User could not be created";
    }
};

const updateUser = async (id, name, email, password) => {
    try {
        let updatedUser = await db.User.update({
            name,
            email,
            password
        }, {
            where: {
                id,
            }
        });
        return updatedUser;
    } catch (error) {
        return error.message || "usuario no actualizado";
    }
};

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.User.destroy({
            where: {
                id,
            }
        });
        return deletedUser;
    } catch (error) {
        return error.message || "User could not be deleted";
    }
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };