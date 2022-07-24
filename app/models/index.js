const config = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.user = require('./user.model.js')(sequelize, Sequelize)
db.role = require('./role.model.js')(sequelize, Sequelize)
db.song = require('./song.model.js')(sequelize, Sequelize)
db.score = require('./score.model.js')(sequelize, Sequelize)
   

// DB relations - assigns keys for relations
db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
})

db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
})
db.ROLES = ['user', 'admin']

db.user.hasMany(db.score)
db.score.belongsTo(db.user)

db.score.hasOne(db.song, {
  foreignKey: {
    allowNull: false
  }
});
db.song.belognsTo(db.score)


module.exports = db
