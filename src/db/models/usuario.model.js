const { Model, DataTypes } = require('sequelize');

class Usuario extends Model
{
    
}

const UsuarioSchema = {
    id: 
    {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'user_name'
    },
    registerDate: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'register_date'
    },
    punchIn: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'punch_in'
    },
    punchOut: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'punch_out'
    }
}

module.exports = { Usuario, UsuarioSchema };