import gameData, {gameStatistics, gameState} from '../data/game-data';
import headerScreen from '../screens/header-screen';
import getDataWin from '../screen-data/get-data-win';
import getDataLose from '../screen-data/get-data-lose';
import getComparison from '../data/get-comparison';
import ResultView from '../views/result-view';
import Application from '../application';


class ResultScreen {
  initialize() {
    const gameResult = {
      notesLeft: gameState.notesLeft,
      timeLeft: gameState.timeLeft
    };
    const comparison = getComparison(gameStatistics, gameResult);
    let dataResult;

    headerScreen.view.unbind();

    if (Object.values(gameData.ExitCode).indexOf(comparison) !== -1) {
      dataResult = getDataLose(comparison);
    } else {
      dataResult = getDataWin(gameResult, comparison);
    }

    this.view = new ResultView(dataResult);

    const view = this.view;

    view.onReplayClick = () => {
      view.unbind();
      Application.showWelcome();
    };

    view.show();
  }
}

export default new ResultScreen();
