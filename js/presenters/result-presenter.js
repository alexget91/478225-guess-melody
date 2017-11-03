import headerPresenter from '../presenters/header-presenter';
import ResultView from '../views/result-view';
import Application from '../application';
import getDataLose from '../screen-data/get-data-lose';
import getDataWin from '../screen-data/get-data-win';
import ConvertData from '../data/convert-data';

class ResultPresenter {
  initialize(data) {
    if (headerPresenter.view) {
      headerPresenter.view.unbind();
    }

    const isWin = data.length > 2;
    const dataDecode = {};
    let dataResult;

    [dataDecode.min, dataDecode.sec, dataDecode.score, dataDecode.fastCount,
      dataDecode.mistakes, dataDecode.place, dataDecode.playersCount, dataDecode.percent] = ConvertData.decode(data);

    if (isWin) {
      dataResult = getDataWin(dataDecode);
    } else {
      dataResult = getDataLose(dataDecode);
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
