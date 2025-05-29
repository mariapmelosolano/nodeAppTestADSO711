// Including Dependencies
const express = require('express'); // Para requerir el framework Express de Node.js
const app = express(); // Instancia de Express
const bodyParser = require('body-parser'); // Permite leer el cuerpo para analizarlo en un objeto Json
const morgan = require('morgan'); // Middleware que informa sobre las peticiones al servidor

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



// Settings
app.set('port', process.env.PORT || 4000); // Se setea el Puerto, toma 4000 si no está configurado en ENV

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); // Para recibir datos desde un formulario
app.use(bodyParser.json()); // Para que el servidor pueda recibir formato Json
app.use(morgan('dev')); // la opción dev da la información principal. Combined da más detalle

// Routes
//Ruta de usuarios para la V1 del API
app.use('/api/v1/users', require('./api/v1/user.routes'));//Ruta para users
app.use('/api/v1/articles', require('./api/v1/articles.routes'));
app.use('/api/v1/category', require('./api/v1/category.routes'));


// Se configura una ruta sencilla a través del método GET para probar
// app.get('/', (req, res) => { // req=request: llegan datos al servidor
//     // res=response: se envían los datos hacia el cliente
//     // res.send('Hello ADSO !!'); // Se envía la respuesta en texto plano
//     res.send({Title:'Hello ADSO !!'}) // Envío en formato Json
// });

// Starting the Server
app.listen(app.get('port'), () => { // Se inicia el servidor en el Puerto configurado
    console.log(`Server running on localhost:${app.get('port')}`);
});
