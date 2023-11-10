const { Todo } = require('../models');

module.exports = {
	createTodo: async (req, res) => {
		try {
			const todo = await Todo.create({ ...req.body, userId: req.user.userId });
			res.status(201).json(todo);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	getTodos: async (req, res) => {
		try {
			const userId = req.user.userId;
			const todos = await Todo.findAll({ where: { userId } });
			res.json(todos);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	getTodoById: async (req, res) => {
		try {
			const todo = await Todo.findByPk(req.params.id);
			res.json(todo);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	updateTodo: async (req, res) => {
		try {
			const todo = await Todo.update(req.body, {
				where: { id: req.params.id },
			});
			res.status(200).json({ message: 'Todo updated successfully', todo });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	deleteTodo: async (req, res) => {
		try {
			const todo = await Todo.destroy({ where: { id: req.params.id } });
			res.status(200).json({ message: 'Todo deleted successfully', todo });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	deleteAllTodos: async (req, res) => {
		try {
			const todos = await Todo.destroy({ where: { userId: req.user.userId } });
			res
				.status(200)
				.json({ message: 'All todos deleted successfully', todos });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},
};
