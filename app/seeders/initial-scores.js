const CREATE_MOCK_SCORES = () => {
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
  return scores
}

const MOCK_SCORES = CREATE_MOCK_SCORES();

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Scores', MOCK_SCORES)
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Scores', null, {})
  },
}
