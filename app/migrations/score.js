export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Scores', {
      scoreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      songId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER
      },
    })
  },
  down: queryInterface => queryInterface.dropTable('Scores'),
}
