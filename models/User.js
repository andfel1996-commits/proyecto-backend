const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('username', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
});

module.exports = User;
