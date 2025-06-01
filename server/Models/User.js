const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('User', {
  key_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  education: {
    type: DataTypes.TEXT
  },
  experience: {
    type: DataTypes.TEXT
  },
  projects: { // Fixed typo from 'project' to 'projects'
    type: DataTypes.TEXT
  },
  about: {
    type: DataTypes.TEXT
  }
});

module.exports = User;
