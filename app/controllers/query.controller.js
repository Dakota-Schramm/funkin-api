const db = require('../models')
const User = db.user
const Role = db.role
const Score = db.score
const Song = db.song
const Op = db.Sequelize.Op

exports.allScores = async (req, res) => {
  const scores = await Score.findAll({
    attributes: ['score', 'userId', 'scoreId']
  })
  res.status(200).send(scores)
}

exports.allUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ['userId', 'roleId', 'username', 'password']
  })
  res.status(200).send(users)
}

exports.allSongs = async (req, res) => {
  const songs = await Song.findAll({
    attributes: ['songname', 'songId']
  });
  res.status(200).send(songs);
}

exports.scoresFromUsers = (req, res) => {
  Score.findAll({ 
    where: { userId: req.params.userid} ,
    attributes: ['score', 'userId', 'scoreId']
  })
  .then(scores => res.status(200).send(scores))
  .catch(err => res.status(500).send({ message: err.message }) )
}
