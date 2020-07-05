const express = require('express');
const routes  = express.Router();

const ProductController = require('./controllers/ProductController');

// Rotas

//API

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

//http://localhost:3333/api

routes.get('/', (req, res) => {
    res.send('olá express');
});

//http://localhost:3333/api/index

routes.get('/index', ProductController.index);

//http://localhost:3333/api/show

routes.get('/show/:id', ProductController.show);

//http://localhost:3333/api/store

routes.post('/store', ProductController.store);

//http://localhost:3333/api/update

routes.post('/update', ProductController.update);

//http://localhost:3333/api/delete

routes.post('/delete', ProductController.delete);

//http://localhost:3333/api/test

routes.get('/test', (req, res) => {
    res.send('test');
});

module.exports = routes;