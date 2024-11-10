const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Book = require('../models/book');
const BorrowedBook = require('../models/borrowedBook');

// Tüm kullanıcıları listeleme
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "An error occurred while fetching users." });
    }
});

// Tek kullanıcıyı getir
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [
      {
        model: Book,
        as: 'books',
        through: { attributes: ['userScore', 'borrowDate', 'returnDate'] },
      },
    ],
  });
  res.json(user);
});

// Kitap ödünç alma
router.post('/:userId/borrow/:bookId', async (req, res) => {
  await BorrowedBook.create({
    UserId: req.params.userId,
    BookId: req.params.bookId,
  });
  res.status(204).send();
});

// Kitap iade etme
router.post('/:userId/return/:bookId', async (req, res) => {
  const borrowedBook = await BorrowedBook.findOne({
    where: {
      UserId: req.params.userId,
      BookId: req.params.bookId,
    },
  });
  if (borrowedBook) {
    borrowedBook.returnDate = new Date();
    if (req.body.score) borrowedBook.userScore = req.body.score;
    await borrowedBook.save();
    res.status(204).send();
  } else {
    res.status(404).send({ error: 'Borrow record not found' });
  }
});

module.exports = router;
