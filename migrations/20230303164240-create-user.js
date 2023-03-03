"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
        unique: true
			},
			passwordDigest: {
				type: Sequelize.STRING,
        allowNull: false
			},
			rating: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
        type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
        type: Sequelize.DATE,
				allowNull: false
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users")
	},
}
