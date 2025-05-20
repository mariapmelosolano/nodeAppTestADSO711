const { Router }  = require('express');
const router = Router(); //creamos instancia del Router

const user_controller = require('../../controllers/userController');

router.get('/testUserApi',user_controller.testUserAPI);
router.get('/', user_controller.getAllusers);
router.get('/:id',user_controller.getOneUser);
router.post('/',user_controller.createUser);
router.put('/:id',user_controller.updateUser);
router.delete('/:id',user_controller.deleteUser);

// Exportar el modulo
module.exports = router;