const express = require('express'); // Se llama dependencia del Framework
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); //Creamos una instancia de express

if (process.env.NODE_ENV != 'production') {
    //cargamos las variables de entorno
    require('dotenv').config();
}

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
//Permite recibir datos del formulario
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); //Permite recibir solicitudes en Json


//Routes
// Rutas de usuarios para la V1 del API
app.use('/api/v1/users', require('./api/v1/user.routes'));

// app.get('/', (req, resp)=>{
//     //req = request => es la peticion del usuario
//     //res = reponse => es la respuesta del servidor al usuario
// resp.send({
// 'status': 200,
// 'message': 'Prueba de API exitosa'
// })
// });
// app.get('/saludos', (req, res) => {
//     res.send({
//         'status': 200,
//         'message': 'Hello ADSO 2873711!'
//     })
// });
// app.post('/newUserTest', (req, res) =>{
//    // console.log(req);
//    console.log(req.body);
// //    const name = req.body.name;
// //    const email = req.body.email;
// //    const telefono = req.body.telefono;
// //    const direccion = req.body.direccion;
// //    const empresa = req.body.empresa;
// const {name, email, telefono, direccion, empresa} = req.body;
//    console.log(`Nombre: ${name}`);
//    console.log(`Email: ${email}`);
//    console.log(`telefono: ${telefono}`);
//    console.log(`direccion: ${direccion}`);
//    console.log(`empresa: ${empresa}`);
//    res.send({
//     "status": 201,
//     "message": "Usuario creado con éxito"
//    });
// });
//se inicializa el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}🐱`);
})