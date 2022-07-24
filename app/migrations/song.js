export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      songId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      songname: {
        type: Sequelize.STRING
      },
    })
  },
  down: queryInterface => queryInterface.dropTable('Songs'),
}
