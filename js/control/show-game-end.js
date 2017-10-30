import gameData, {gameStatistics, gameState} from '../data/game-data.js';
import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import resultScreen from '../screens/result-screen.js';
import header from '../screens/header.js';
import getDataWin from '../screen-data/get-data-win.js';
import getDataLose from '../screen-data/get-data-lose.js';
import getComparison from '../data/get-comparison.js';

export default () => {
  const gameResult = {
    notesLeft: gameState.notesLeft,
    timeLeft: gameState.timeLeft
  };
  const comparison = getComparison(gameStatistics, gameResult);
  let dataResult;

  header.unbind();

  if (Object.values(gameData.ExitCode).indexOf(comparison) !== -1) {
    dataResult = getDataLose(comparison);
  } else {
    dataResult = getDataWin(gameResult, comparison);
  }

  resultScreen.view.data = dataResult;
  resultScreen.initialize();
  clearScreen();
  showScreen(resultScreen.view.element);
};
