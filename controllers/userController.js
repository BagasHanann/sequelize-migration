const { User } = require('../models');

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

	addUser: async (req, res) => {},
};
