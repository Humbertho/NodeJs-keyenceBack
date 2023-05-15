const { Usuario, UsuarioSchema } = require('./usuario.model.js');

const USUARIO_TABLE = 'usuarios';

function setupModels(sequelize)
{
    Usuario.init(UsuarioSchema, {sequelize, modelName: 'Usuario', tableName: USUARIO_TABLE, timestamps: true});
}

module.exports = setupModels;