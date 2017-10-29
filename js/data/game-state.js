import gameData from './game-data.js';

export default class GameState {
  constructor(notesLeft, timeLeft) {
    this.notesLeft = notesLeft;
    this.timeLeft = timeLeft;
  }

  get mistakesCount() {
    return gameData.NOTES_COUNT - this.notesLeft;
  }

  reset() {
    this.notesLeft = gameData.NOTES_COUNT;
    this.timeLeft = gameData.GAME_TIME;
  }

  static getDefaultGameState() {
    return new GameState(gameData.NOTES_COUNT, gameData.GAME_TIME);
  }
}
