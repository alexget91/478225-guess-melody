import gameData, {gameStatistics, gameState} from '../data/game-data';
import headerPresenter from '../screens/header-presenter';
import getDataWin from '../screen-data/get-data-win';
import getDataLose from '../screen-data/get-data-lose';
import getComparison from '../data/get-comparison';
import clearScreen from '../dom-helpers/clear-screen';
import ResultView from '../views/result-view';
import dataWelcome from '../screen-data/data-welcome';
import Application from '../application';


export class ResultScreen {
  constructor() {
    this.view = new ResultView();
  }

  initialize(data) {
    if (typeof data !== `undefined`) {
      this.view.data = data;
    }

    this.view.onReplayClick = () => {
      this.view.unbind();
      clearScreen();
      Application.showWelcome(dataWelcome);
    };
  }

  static showGameEnd() {
    const gameResult = {
      notesLeft: gameState.notesLeft,
      timeLeft: gameState.timeLeft
    };
    const comparison = getComparison(gameStatistics, gameResult);
    let dataResult;

    headerPresenter.view.unbind();

    if (Object.values(gameData.ExitCode).indexOf(comparison) !== -1) {
      dataResult = getDataLose(comparison);
      history.pushState(null, null, `#result?${comparison}`);
    } else {
      dataResult = getDataWin(gameResult, comparison);
      history.pushState(null, null, `#result?${dataResult.hash}`);
    }

    clearScreen();
    Application.showResult(dataResult);
  }
}

export default new ResultScreen();
