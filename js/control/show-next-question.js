import {gameSequence as gameSequenceInitial, gameAnswers, gameState} from '../data/game-data.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import showGameEnd from '../control/show-game-end.js';
import Application from '../control/application.js';

let gameSequence;

export default (reset) => {
  if (reset) {
    gameSequence = [...gameSequenceInitial];
    gameAnswers.length = 0;
    gameState.reset();
  }

  const question = gameSequence.shift();

  if (question) {

    if (reset) {
      clearScreen();
      Application.showHeader(gameState.timeLeft, gameState.mistakesCount);
    } else {
      clearScreen(`.main-wrap`);
    }

    if (question.typeArtist) {
      gameState.currentLevelIsGenre = false;
      Application.showArtist(question);
    } else {
      gameState.currentLevelIsGenre = true;
      Application.showGenre(question);
    }

  } else {
    showGameEnd();
  }
};
