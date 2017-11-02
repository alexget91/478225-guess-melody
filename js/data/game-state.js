import gameData from './game-data';

export default class GameState {
  constructor(notesLeft, timeLeft) {
    this.notesLeft = notesLeft;
    this.timeLeft = timeLeft;
    this.currentLevel = -1;
    this.currentLevelIsGenre = false;
  }

  get mistakesCount() {
    return gameData.NOTES_COUNT - this.notesLeft;
  }

  reset() {
    this.notesLeft = gameData.NOTES_COUNT;
    this.timeLeft = gameData.GAME_TIME;
    this.currentLevel = -1;
    this.currentLevelIsGenre = false;
  }
}
