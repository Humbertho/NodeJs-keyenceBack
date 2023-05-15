const express = require('express');

const usuarioRouter = require('./usuario.router');

function routerApi(app)
{
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/usuario', usuarioRouter);
}

module.exports = routerApi;