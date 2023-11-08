'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [
			{
				name: 'Bagaszxz',
				email: 'bagaszxz@gmail.com',
				password: '123',
			},
			{
				name: 'Danang',
				email: 'Danang@gmail.com',
				password: '321',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
