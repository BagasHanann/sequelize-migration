const express = require('express');
const {
	createTodo,
	getTodos,
	getTodoById,
	updateTodo,
	deleteTodo,
} = require('../controllers/todoController');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticateToken, createTodo);
router.get('/', authenticateToken, getTodos);
router.get('/:id', authenticateToken, getTodoById);
router.put('/:id', authenticateToken, updateTodo);
router.delete('/:id', authenticateToken, deleteTodo);

module.exports = router;