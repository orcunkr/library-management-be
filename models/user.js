const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Sequelize bağlantısı

// User modelini tanımlıyoruz
const User = sequelize.define('User', {
  // id alanı, primary key ve autoIncrement ile oluşturuluyor
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  // name alanı, kullanıcı adını tutar
  name: {
    type: DataTypes.STRING,
    allowNull: false, // name alanı boş olamaz
  },

  // email alanı, her kullanıcıya ait benzersiz bir e-posta adresini tutar
  email: {
    type: DataTypes.STRING,
    allowNull: false, // email alanı boş olamaz
    unique: true, // email benzersiz olacak şekilde ayarlanır
  },

  // createdAt alanı, kullanıcı oluşturulma tarihini tutar
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Varsayılan değer olarak geçerli tarih kullanılır
  },

  // updatedAt alanı, kullanıcı güncellenme tarihini tutar
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Varsayılan değer olarak geçerli tarih kullanılır
  }
}, {
  // Sequelize'e tablo ismini 'Users' olarak belirliyoruz
  tableName: 'Users',
  timestamps: true, // createdAt ve updatedAt alanlarını otomatik olarak oluşturur
});

module.exports = User;
