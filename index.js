const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//area de endpoint
app.get('/', (request, response) => {
    response.json({ info: 'La API esta en ejecucion ' });
});

//usuarios
app.get('/usuario', (request, response) => {
    response.json({ id: 1, nombre: 'Irahan', apellido: 'Jose' });
});

app.listen(port, () => {
    console.log(`API corriendo en el puerto ${port}`);
});