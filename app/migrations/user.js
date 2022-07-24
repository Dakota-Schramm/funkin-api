export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
    })
  },
  down: queryInterface => queryInterface.dropTable('Songs'),
}
