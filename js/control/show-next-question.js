import {gameSequence as gameSequenceInitial, gameAnswers, initialState} from '../data/game-data.js';
import showScreen from '../view/show-screen.js';
import clearScreen from '../view/clear-screen.js';
import header from '../screen-templates/header.js';
import artistScreenTemplate, {artistScreenInit} from '../screen-templates/artist.js';
import genreScreenTemplate, {genreScreenInit} from '../screen-templates/genre.js';
import getDataHeader from '../screen-data/get-data-header.js';
import getDataArtist from '../screen-data/get-data-artist.js';
import getDataGenre from '../screen-data/get-data-genre.js';
import showGameEnd from '../control/show-game-end.js';

let gameSequence;

export default (gameState, reset) => {
  if (reset) {
    gameSequence = [...gameSequenceInitial];
    gameAnswers.length = 0;
    gameState = Object.assign({}, initialState);
  }

  const question = gameSequence.shift();

  if (question) {

    if (reset) {
      clearScreen();
      showScreen(header(getDataHeader({time: initialState.timeLeft, mistakes: 0})));
    } else {
      clearScreen(`.main-wrap`);
    }

    if (question.typeArtist) {
      showScreen(artistScreenTemplate(getDataArtist(question)), artistScreenInit, gameState);
    } else {
      showScreen(genreScreenTemplate(getDataGenre(question)), genreScreenInit, gameState);
    }

  } else {
    showGameEnd(gameState);
  }
};
