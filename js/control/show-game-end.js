import gameData, {gameStatistics, gameState} from '../data/game-data.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import headerPresenter from '../screens/header-presenter.js';
import getDataWin from '../screen-data/get-data-win.js';
import getDataLose from '../screen-data/get-data-lose.js';
import getComparison from '../data/get-comparison.js';
import Application from '../control/application.js';

export default () => {
  const gameResult = {
    notesLeft: gameState.notesLeft,
    timeLeft: gameState.timeLeft
  };
  const comparison = getComparison(gameStatistics, gameResult);
  let dataResult;

  headerPresenter.view.unbind();

  if (Object.values(gameData.ExitCode).indexOf(comparison) !== -1) {
    dataResult = getDataLose(comparison);
  } else {
    dataResult = getDataWin(gameResult, comparison);
  }

  clearScreen();
  Application.showResult(dataResult);
};
