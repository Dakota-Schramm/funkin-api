var config = require('../config/db.config.json')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.development)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model.js')(sequelize, Sequelize)
db.role = require('./role.model.js')(sequelize, Sequelize)
db.song = require('./song.model.js')(sequelize, Sequelize)
db.score = require('./score.model.js')(sequelize, Sequelize)
   
/////
// DB relations - assigns keys for relations
/////

// User - Role --- One to one
db.user.hasOne(db.role, {
  foreignKey: { name: 'userId', allowNull: false },
  otherKey: 'roleId'
});
db.role.belongsTo(db.user, {
  foreignKey: 'roleId',
  otherKey: 'userId'
})
db.ROLES = ['user', 'admin'] // used for role checking middleware in verifySignUp

// User - Score --- One to many
db.user.hasMany(db.score, {
  foreignKey: 'userId',
  otherKey: 'scoreId'
})
db.score.belongsTo(db.user, {
  foreignKey: 'scoreId',
  otherKey: 'userId'
})

// Score - Song --- One to one
db.score.hasOne(db.song, {
  foreignKey: { name: 'scoreId', allowNull: false },
  otherKey: 'songId'
});
db.song.belongsTo(db.score, {
  foreignKey: 'songId',
  otherKey: 'scoreId'
})

module.exports = db
