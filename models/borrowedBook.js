const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Book = require('./book');

const BorrowedBook = sequelize.define('BorrowedBook', {
  borrowDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  userScore: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

User.belongsToMany(Book, { through: BorrowedBook, as: 'books' });
Book.belongsToMany(User, { through: BorrowedBook, as: 'users' });

module.exports = BorrowedBook;
