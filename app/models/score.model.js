module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define('scores', {
    score: {
      type: Sequelize.INTEGER
    }
  })
  return Song
}

