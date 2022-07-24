'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      songId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      songname: {
        type: Sequelize.STRING
      },
    })

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Songs')
  }
}

