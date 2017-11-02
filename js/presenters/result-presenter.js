import gameData, {gameStatistics, gameState} from '../data/game-data';
import headerPresenter from '../presenters/header-presenter';
import getDataWin from '../screen-data/get-data-win';
import getDataLose from '../screen-data/get-data-lose';
import getComparison from '../data/get-comparison';
import ResultView from '../views/result-view';
import Application from '../application';


class ResultPresenter {
  initialize() {
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

    this.view = new ResultView(dataResult);

    const view = this.view;

    view.onReplayClick = () => {
      view.unbind();
      Application.showWelcome();
    };

    view.show();
  }
}

export default new ResultPresenter();
