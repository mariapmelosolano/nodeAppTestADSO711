// Creamos el router para poder usar los verbos HTTP
const { Router } = require('express');
// Incluimos nuestro controlador de usuario
const userController = require('../../controllers/categoryController');
const router = Router(); // Llamamos al método Router de Express

// req => request => En request llegan los datos del body
// res => response => Se envían los datos hacia al cliente

router.get("/", userController.getAllCategories);

router.get('/:categoryId', userController.getCategory);

router.post('/', userController.createCategory);

router.put('/:categoryId', userController.updateCategory);

router.delete('/:categoryId', userController.deleteCategory);

module.exports = router;
