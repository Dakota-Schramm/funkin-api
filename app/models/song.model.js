module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define('songs', {
    songname: { type: Sequelize.STRING }
  })
  return Song
}
