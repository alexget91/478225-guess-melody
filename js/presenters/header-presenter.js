import HeaderView from '../views/header-view';
import getMinutes from '../data/get-minutes';
import getFormattedTime from '../data/get-formatted-time';
import gameData, {gameState} from '../data/game-data';
import artistPresenter from './artist-presenter';
import genrePresenter from './genre-presenter';
import getRadius from '../data/get-radius';
import getDataHeader from '../screen-data/get-data-header';
import getDataResult from '../screen-data/get-data-result';
import Application from '../application';

class HeaderPresenter {
  initialize(timeLeft, mistakesCount) {
    this.view = new HeaderView(getDataHeader(timeLeft, mistakesCount));

    const view = this.view;

    view.onTimerTick = () => {
      view.timerTick();

      if (!view.timer) {
        view.unbind();

        if (gameState.currentLevelIsGenre) {
          genrePresenter.view.audioToggle();
        } else {
          artistPresenter.view.audioToggle();
        }

        Application.showResult(getDataResult());

      } else {

        const timerValue = view.timer.value;

        if (timerValue < gameData.TIMER_BLINK_TIME) {
          view.timerBlink();
        }

        const time = getMinutes(timerValue);
        const timeRatio = timerValue / gameData.GAME_TIME;
        const timerLineParameters = getRadius(timeRatio, 370);

        gameState.timeLeft = timerValue;

        view.headerMin.textContent = getFormattedTime(time.min);
        view.headerSec.textContent = getFormattedTime(time.sec);
        view.timerLine.setAttribute(`stroke-dashoffset`, timerLineParameters.offset);
      }
    };

    view.show();
  }
}

export default new HeaderPresenter();
