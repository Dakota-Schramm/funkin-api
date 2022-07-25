module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      { roleId: 0, name: 'user' },
      { roleId: 1, name: 'admin' }
    ])
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {})
  },
}
