import {initialState} from '../data/game-data.js';
import showScreen from './show-screen.js';
import clearScreen from './clear-screen.js';
import header from '../screen-templates/header.js';
import getDataHeader from '../screen-data/get-data-header.js';

export default (gameState) => {
  clearScreen(`.page-header`);
  showScreen(header(getDataHeader({time: gameState.timeLeft, mistakes: initialState.notesLeft - gameState.notesLeft})));
};
