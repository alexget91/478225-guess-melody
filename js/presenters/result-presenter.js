import headerPresenter from '../presenters/header-presenter';
import ResultView from '../views/result-view';
import Application from '../application';
import getDataLose from '../screen-data/get-data-lose';
import getDataWin from '../screen-data/get-data-win';

class ResultPresenter {
  initialize(data) {
    headerPresenter.view.unbind();

    const dataDecode = ResultPresenter.dataDecode(data);
    let dataResult;

    if (dataDecode.isWin) {
      dataResult = getDataWin(dataDecode.result);
    } else {
      dataResult = getDataLose(dataDecode.result);
    }

    this.view = new ResultView(dataResult);

    const view = this.view;

    view.onReplayClick = () => {
      view.unbind();
      Application.showWelcome();
    };

    view.show();
  }

  static dataDecode(data) {
    let result;
    let isWin = false;

    if (data.length > 2) {
      result = {
        min: parseInt(data.substr(0, 2), 10),
        sec: parseInt(data.substr(2, 2), 10),
        score: parseInt(data.substr(4, 2), 10),
        fastCount: parseInt(data.substr(6, 2), 10),
        mistakes: parseInt(data.substr(8, 2), 10),
        place: parseInt(data.substr(10, 2), 10),
        playersCount: parseInt(data.substr(12, 2), 10),
        percent: parseInt(data.substr(14), 10)
      };
      isWin = true;
    } else {
      result = parseInt(data, 10);
    }

    return {result, isWin};
  }
}

export default new ResultPresenter();
