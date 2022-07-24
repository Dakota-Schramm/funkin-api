'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scores', {
      scoreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      songId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scores')
  }
}

