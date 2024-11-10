// config/database.js

const { Sequelize } = require("sequelize");

// Sequelize örneğini başlatıyoruz
const sequelize = new Sequelize("library_management", "postgres", "123456", {
  host: "localhost", // veya PostgreSQL’in kurulu olduğu sunucu IP’si
  dialect: "postgres",
});

// Bağlantıyı test ediyoruz
sequelize
  .authenticate()
  .then(() => {
    console.log("Veritabanına başarıyla bağlanıldı.");
  })
  .catch((err) => {
    console.error("Veritabanı bağlantı hatası:", err);
  });

module.exports = sequelize;
