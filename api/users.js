const db = require('../models');
const {Router} = require('express');
// Creamos el router para poder usar los verbos HTTP
const router = Router();

//req => request => En request llegan los datos del body
//res => response => Se envian los datos hacia el cliente
router.get("/", (req, res) => {
    res.send({Title: "Hello ADSO!"});
});

module.exports = router;

router.get('/all', async (req, res)=> {
try {
    let users = await db.User.findAll();
    res.status(200).send(users);
} catch (error) {
    res.status(400).send("No se pudieron obtener los usuarios")
}
})
router.get('/:id', async (req,res) => {
    try {
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    }catch (error){
        res.status(400).send('No se pudo obtener el usuario')
    }
})
router.put('/:id', async (req, res) =>{
    try{
        let id = req.params.id;
        let {name, email, password} = req.body;
        await db.User.update(
            {name, email, password},
            {
                where:{
                    id,
                }
            }
        );
        res.status(200).send("Usuario actualizado correctamente");
    }catch (error) {
        res.status(400).send("No se pudo actualizar el usuario");
    }
})
router.delete('/:id', async (req, res) =>{
    try{
        let id= req.params.id;
        await db.User.destroy({
            where:{
                id,
            }
        });
        res.status(200).send("Usuario eliminado correctamente");

    }catch (error) {
        res.status(400).send("No se pudo eliminar el usuario")
    }
})
router.post('/new', async (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        await db.User.create({
            name,
            email,
            password,
        })
        res.status(200).send('Usuario Creado');
    }catch (error){
        res.status(400).send('Usuario no pudo ser creado');
    }

    });


