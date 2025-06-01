const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Job = sequelize.define('Job', {
  company: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  role: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  experience: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imgURL: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Job;
