import gameData, {gameStatistics, gameState} from '../data/game-data.js';
import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import result from '../screens/result.js';
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

  if (Object.values(gameData.ExitCode).indexOf(comparison) !== -1) {
    dataResult = getDataLose(comparison);
  } else {
    dataResult = getDataWin(gameResult, comparison);
  }

  result.data = dataResult;
  clearScreen();
  showScreen(result.element);
};
