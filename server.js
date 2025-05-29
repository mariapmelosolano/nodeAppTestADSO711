const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas principales de la API
app.use('/api/v1/users', require('./api/v1/user.routes'));
app.use('/api/v1/articles', require('./api/v1/articles.routes'));
app.use('/api/v1/category', require('./api/v1/category.routes'));

// Inicializar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on localhost:${app.get('port')}😍`);
});