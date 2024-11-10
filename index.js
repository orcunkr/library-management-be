// index.js

const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

const app = express();

// Middleware ve JSON parse ayarları
app.use(express.json());
app.use('/users', userRoutes);
app.use('/books', bookRoutes);

// Basit bir başlangıç rotası
app.get("/", (req, res) => {
  res.send("Library Management API is running!");
});

// Veritabanı bağlantısını kontrol etme ve senkronizasyon
sequelize
  .authenticate()
  .then(() => {
    console.log("Veritabanına başarıyla bağlanıldı.");
    
    // Veritabanı senkronizasyonu
    sequelize.sync({ force: false }) // force: true kullanarak mevcut tabloları sıfırlayabilirsiniz
      .then(() => {
        console.log("Veritabanı senkronize edildi.");
      })
      .catch((err) => {
        console.error("Veritabanı senkronizasyon hatası:", err);
      });
  })
  .catch((err) => {
    console.error("Veritabanı bağlantı hatası:", err);
  });

// Sunucuyu başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
