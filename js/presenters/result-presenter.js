import {gameResult} from '../data/game-data';
import headerPresenter from '../presenters/header-presenter';
import ResultView from '../views/result-view';
import Application from '../application';
import getDataLose from '../screen-data/get-data-lose';
import getDataWin from '../screen-data/get-data-win';
import ConvertData from '../data/convert-data';
import getComparison from '../data/get-comparison';
import Loader from '../loader';

class ResultPresenter {
  initialize(data) {
    if (headerPresenter.view) {
      headerPresenter.view.unbind();
    }

    const isWin = data.length > 2;
    const decodeArray = ConvertData.decode(data);
    const dataDecode = {};
    let dataResult;

    if (isWin) {
      /* [dataDecode.min, dataDecode.sec, dataDecode.score, dataDecode.fastCount,
        dataDecode.mistakes, dataDecode.place, dataDecode.playersCount, dataDecode.percent] = decodeArray; */
      [dataDecode.min, dataDecode.sec, dataDecode.score, dataDecode.fastCount, dataDecode.mistakes] = decodeArray;

      dataResult = getDataWin(dataDecode);
    } else {
      dataResult = getDataLose(decodeArray[0]);
    }

    this.view = new ResultView(dataResult);

    const view = this.view;

    view.onReplayClick = () => {
      view.unbind();
      Application.showWelcome();
    };

    view.show();

    if (Object.keys(gameResult).length) {
      Loader.saveResults(gameResult)
          .then(() => Loader.loadResults())
          .then((gameStatistics) => {
            view.showComparison(getComparison(gameStatistics, gameResult));
          });
    }
  }
}

export default new ResultPresenter();
