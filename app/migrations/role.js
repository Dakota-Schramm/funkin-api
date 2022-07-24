export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
    })
  },
  down: queryInterface => queryInterface.dropTable('Roles'),
}
