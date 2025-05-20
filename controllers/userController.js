const user_service = require('../services/userService');

const testUserAPI = (req, resp) => {
    console.log('testUserAPI');
    resp.status(200).send({
        "status": "OK",
        "message": "API User state: available"
    });
};  

const getAllusers = async (req, resp) => {
    const users = await user_service.getAllUsers();
    if (users) 
        resp.status(200).send({
            "status": "OK", 
            "message": "Usuarios",
            "data": users
        });
     else 
        resp.status(400).send({"status": "FAILED", "message": "Error al traer los usuarios",});
    };
    
    
    const getOneUser = async (req, resp) => {
        const id= req.params.id;
        const user = await user_service.getOneUser(id);
        if (user) 
            resp.status(200).send({
            "status": "OK", 
            "message": "Usuario traido con exito",
            "data": user
        });
        else 
        resp.status(400).send({"status": "FAILED", "message": "Error al traer el usuario"});
};

const createUser= async (req, res) =>{
    const {body} = req;
    const createdUser = await user_service.createUser(body.name, body.email, body.password);
    if (createdUser) 
        res.status(201).send({ 
        status: "OK", 
        data: createdUser});
    else
    res.status(400).send({ 
        status: "FAILED", 
        data: createdUser});
};

const updateUser = async(req, res)=>{
    let id = req.params.id;
    let{name,email,password}=req.body;
    const updatedUser = await user_service.updateUser(id,name,email,password);
    if(updatedUser)
        res.status(200).send({status:"ok", data: updatedUser});
    else
    res.status(400).send({status: "Failed", data: updatedUser});
}
const deleteUser = async (req, res)=>{
    let id = req.params.id;
    const deletedUser = await user_service.deleteUser(id)
    if (deletedUser) 
        res.status(200).send({ status: "OK", data: deletedUser});
    else 
        res.status(400).send({ status: "FAILED", data: deletedUser})
    
}

module.exports = { testUserAPI, getAllusers, getOneUser,updateUser, createUser, deleteUser};