const db = require('../models')

const getAllCategories = async () =>{
    try {
        const allCategories = await db.Category.findAll()
        return allCategories;
        
    } catch (error) {
        throw new Error(`Error al traer los usuarios ${error.message}`)
    }
} 
const getCategory = async (id) =>{
    try {
        const Category = await db.Category.findByPk(id)
        return Category
    } catch (error) {
              throw new Error(`Error al traer al susuario ${error.message}`);      
    }
}
const createCategory = async (name) =>{
    try {
        let newCategory = await db.Category.create({
            name
        })
        return newCategory
    } catch (error) {
        return error.message || `Error al crear el usuario`;      
    }
}

const updateCategory = async (id, name) => {
    try {
        let updatedCategory = await db.Category.update({
            name
        }, {
            where: {
                id,
            }
        });
        return updatedCategory;
    } catch (error) {
        return error.message || `Error al actualizar el usuario`;      
    }
}

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where: {
                id,
            }
        });
        return deletedCategory;
    } catch (error) {
        return error.message || `Error al eliminar el usuario`;      
    }
}
module.exports = {getAllCategories, getCategory, createCategory, updateCategory,deleteCategory}