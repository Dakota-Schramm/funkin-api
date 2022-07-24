// TODO Populate database with mock users
// Add additional user as admin user
// user and passwords being mocked so wont able to access any other users
// other than the one that has had password properly encrypted/unencrypted

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {

      }
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
