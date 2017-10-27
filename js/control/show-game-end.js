import gameData, {gameStatistics} from '../data/game-data.js';
import showScreen from '../view/show-screen.js';
import clearScreen from '../view/clear-screen.js';
import resultScreen, {resultScreenInit} from '../screen-templates/result.js';
import getDataWin from '../screen-data/get-data-win.js';
import getDataLose from '../screen-data/get-data-lose.js';
import getComparison from '../data/get-comparison.js';

export default (gameState) => {
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

  clearScreen();
  showScreen(resultScreen(dataResult), resultScreenInit);
};
