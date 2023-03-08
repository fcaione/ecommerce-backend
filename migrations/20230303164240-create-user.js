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
				unique: true,
			},
			passwordDigest: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			rating: {
				type: Sequelize.INTEGER,
			},
			profileImage: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
			},
			backgroundImage: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue:
					"https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users")
	},
}
