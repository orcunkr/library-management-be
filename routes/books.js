const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Tüm kitapları listele
router.get('/', async (req, res) => {
  const books = await Book.findAll({
    attributes: ['id', 'name'],
  });
  res.json(books);
});

// Tek kitap bilgisi al
router.get('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id, {
    attributes: ['id', 'name', 'score'],
  });
  res.json(book);
});

module.exports = router;
