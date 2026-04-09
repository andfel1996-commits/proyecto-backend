const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Username', { // Cambié 'username' por 'User' para mayor claridad
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
},{
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ['password'] } // Si llegaras a agregar password después
    }
});
module.exports = User;
