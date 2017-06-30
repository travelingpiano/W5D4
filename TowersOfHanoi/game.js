const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3, 2, 1], [NaN, NaN, NaN], [NaN, NaN, NaN]];
  }

  promptMove(callback) {
    console.log(this.stacks);
    reader.question("Please choose a Tower to move from:", function (startTowerIdx) {
      reader.question("Please choose a Tower to move to:", function (endTowerIdx) {
        callback(startTowerIdx, endTowerIdx);
      }
    })
  }

}
