const MOCK_SCORES = () => {
  let scores = [];
  for (let user=0; user<12; user++) {
    for (let song=0; song<21; song++) {
      scores.push({
        userId: user,
        songId: song,
        score: Math.random() * 150000
      })
    }
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Scores', MOCK_SCORES)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Scores', null, {})
  },
}
