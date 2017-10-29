import {gameState} from '../data/game-data.js';
import showScreen from './show-screen.js';
import clearScreen from './clear-screen.js';
import header from '../screens/header.js';
import getDataHeader from '../screen-data/get-data-header.js';

export default () => {
  header.data = getDataHeader(gameState.timeLeft, gameState.mistakesCount);
  clearScreen(`.page-header`);
  showScreen(header.element);
};
