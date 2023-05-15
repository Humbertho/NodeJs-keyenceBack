const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

router
    .get('/', usuarioController.get)
    .get('/:id', usuarioController.getById)
    .post('/', usuarioController.create)
    .post('/createAll', usuarioController.createAll)
    .put('/:id', usuarioController.update)
    .delete('/:id', usuarioController._delete);

module.exports = router;