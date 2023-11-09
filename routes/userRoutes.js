const express = require('express');
const { getAllUsers, getUserById, createUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/register', createUser);
router.post('/login', loginUser);

module.exports = router;
