import {gameSequence as gameSequenceInitial, gameAnswers, gameState} from '../data/game-data.js';
import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import header from '../screens/header.js';
import artist from '../screens/artist.js';
import genre from '../screens/genre.js';
import getDataHeader from '../screen-data/get-data-header.js';
import getDataArtist from '../screen-data/get-data-artist.js';
import getDataGenre from '../screen-data/get-data-genre.js';
import showGameEnd from '../control/show-game-end.js';

let gameSequence;

export default (reset) => {
  if (reset) {
    gameSequence = [...gameSequenceInitial];
    gameAnswers.length = 0;
    gameState.reset();
    header.data = getDataHeader(gameState.timeLeft, gameState.mistakesCount);
  }

  const question = gameSequence.shift();

  if (question) {

    if (reset) {
      clearScreen();
      showScreen(header.element);
    } else {
      clearScreen(`.main-wrap`);
    }

    if (question.typeArtist) {
      artist.data = getDataArtist(question);
      showScreen(artist.element);
    } else {
      gameState.currentLevelIsGenre = true;
      genre.data = getDataGenre(question);
      showScreen(genre.element);
    }

  } else {
    showGameEnd();
  }
};
