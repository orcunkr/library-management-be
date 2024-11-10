const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.FLOAT,
    defaultValue: -1,
  },
}, {});

module.exports = Book;
