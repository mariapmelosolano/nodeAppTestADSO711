// Creamos el router para poder usar los verbos HTTP
const { Router } = require('express');
// Incluimos nuestro controlador de usuario
const userController = require('../../controllers/articleController');
const router = Router(); // Llamamos al método Router de Express

// req => request => En request llegan los datos del body
// res => response => Se envían los datos hacia al cliente

router.get("/", userController.getAllArticles);

router.get('/:articleId', userController.getArticle);

router.post('/', userController.createArticle);

router.put('/:articleId', userController.updateArticle);

router.delete('/:articleId', userController.deleteArticle);

module.exports = router;
