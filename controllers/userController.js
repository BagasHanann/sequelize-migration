require('dotenv').config();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
	getAllUsers: async (req, res) => {
		const users = await User.findAll();
		res.status(200).json({
			status: 'success',
			data: {
				users,
			},
		});
	},

	getUserById: async (req, res) => {
		const user = await User.findByPk(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	},

	createUser: async (req, res) => {
		try {
			const { name, email, password } = req.body;

			const hashedPassword = await bcrypt.hash(password, 10);
			const user = await User.create({ name, email, password: hashedPassword });
			res.status(201).json(user);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	loginUser: async (req, res) => {
		try {
			const { name, email, password } = req.body;
			const user = await User.findOne({ where: { name, email } });

			if (user) {
				const passwordMatch = await bcrypt.compare(password, user.password);

				if (passwordMatch) {
					const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
					res.json({ message: 'Login success', token });
				} else {
					res.status(401).json({ error: 'Password salah' });
				}
			} else {
				res.status(401).json({ error: 'Invalid credentials' });
			}
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},
};
