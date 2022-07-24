module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define('songs', {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: Sequalize.INTEGER
    // },
    songname: {
      type: Sequelize.STRING
    }
  })
  return Song
}
