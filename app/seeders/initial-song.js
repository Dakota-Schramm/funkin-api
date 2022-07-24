module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      { songname: 'bopeebo' },
      { songname: 'fresh' },
      { songname: 'dadbattle' },
      { songname: 'spookeez' },
      { songname: 'south' },
      { songname: 'monster' },
      { songname: 'pico' },
      { songname: 'philly' },
      { songname: 'blammed' },
      { songname: 'satin-panties' },
      { songname: 'high' },
      { songname: 'milf' },
      { songname: 'cocoa' },
      { songname: 'eggnog' },
      { songname: 'winter-horrorland' },
      { songname: 'senpai' },
      { songname: 'roses' },
      { songname: 'thorns' },
      { songname: 'ugh' },
      { songname: 'stress' },
      { songname: 'guns' },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {})
  },
}
