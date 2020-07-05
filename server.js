const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// App express
const app = express();
// Utilidades

// JSON - API REST
app.use(express.json());


// habilitar o uso do re.body
// POST REQUEST
//app.use(express.urlencoded({ extended:true}))

// Cors
app.use(cors());

// BD
const db = mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


// Importando models com require-dir
requireDir('./src/models');

// Rotas            
app.use('/api', require("./src/routes"));


app.listen(3333);