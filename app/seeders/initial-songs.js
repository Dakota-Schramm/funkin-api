module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Songs', [
      { songId: 0, songname: 'bopeebo' },
      { songId: 1, songname: 'fresh' },
      { songId: 2, songname: 'dadbattle' },
      { songId: 3, songname: 'spookeez' },
      { songId: 4, songname: 'south' },
      { songId: 5, songname: 'monster' },
      { songId: 6, songname: 'pico' },
      { songId: 7, songname: 'philly' },
      { songId: 8, songname: 'blammed' },
      { songId: 9, songname: 'satin-panties' },
      { songId: 10, songname: 'high' },
      { songId: 11, songname: 'milf' },
      { songId: 12, songname: 'cocoa' },
      { songId: 13, songname: 'eggnog' },
      { songId: 14, songname: 'winter-horrorland' },
      { songId: 15, songname: 'senpai' },
      { songId: 16, songname: 'roses' },
      { songId: 17, songname: 'thorns' },
      { songId: 18, songname: 'ugh' },
      { songId: 19, songname: 'stress' },
      { songId: 20, songname: 'guns' },
    ])
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Songs', null, {})
  },
}
