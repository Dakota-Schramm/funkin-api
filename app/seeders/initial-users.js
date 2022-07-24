// TODO Populate database with mock users
// Add additional user as admin user
// user and passwords being mocked so wont able to access any other users
// other than the one that has had password properly encrypted/unencrypted

var bcrypt = require('bcryptjs')

const hashPassword = (password) => bcrypt.hashSync(password, 8)

const MOCK_USERS = [
  { userId: 0, roleId: 1, username: 'boyfriend', password: hashPassword('idowhatiwant') },
  { userId: 1, roleId: 0, username: 'girlfriend', password: hashPassword('headempty') },
  { userId: 2, roleId: 0, username: 'daddy-dearest', password: hashPassword('mymearest') },
  { userId: 3, roleId: 0, username: 'mommy-mearest', password: hashPassword('demonPop') },
  { userId: 4, roleId: 0, username: 'skid', password: hashPassword('sp00ky') },
  { userId: 5, roleId: 0, username: 'pump', password: hashPassword('ITSSPOOKY') },
  { userId: 6, roleId: 0, username: 'monster', password: hashPassword('not-a-cannibal') },
  { userId: 7, roleId: 0, username: 'pico', password: hashPassword('gop1co') },
  { userId: 8, roleId: 0, username: 'senpai', password: hashPassword('rosesnthorns') },
  { userId: 9, roleId: 0, username: 'tankman', password: hashPassword('newgroundsveteran') },
  { userId: 10, roleId: 0, username: 'darnell', password: hashPassword('classthree') },
  { userId: 11, roleId: 0, username: 'nene', password: hashPassword('knife2meetu') }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', MOCK_USERS)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
