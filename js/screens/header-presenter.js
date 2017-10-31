import HeaderView from '../views/header-view';
import getMinutes from '../data/get-minutes';
import getFormattedTime from '../data/get-formatted-time';
import gameData, {gameState} from '../data/game-data';
import {ResultScreen} from '../screens/result-screen';
import artistScreen from './artist-screen';
import genreScreen from './genre-screen';
import getRadius from '../data/get-radius';
import getDataHeader from '../screen-data/get-data-header';

class HeaderPresenter {
  constructor() {
    this.view = new HeaderView();
  }

  initialize(timeLeft, mistakesCount) {
    if (typeof timeLeft !== `undefined` && typeof mistakesCount !== `undefined`) {
      this.view.data = getDataHeader(timeLeft, mistakesCount);
    }

    this.view.onTimerTick = () => {
      this.view.timer = this.view.timer.tick();

      if (!this.view.timer) {
        this.view.unbind();

        if (gameState.currentLevelIsGenre) {
          genreScreen.view.audioPause();
        } else {
          artistScreen.view.audio.pause();
        }

        ResultScreen.showGameEnd();
      } else {

        if (this.view.timer.value < gameData.TIMER_BLINK_TIME) {
          this.view.element.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
        }

        const time = getMinutes(this.view.timer.value);
        const timeRatio = this.view.timer.value / gameData.GAME_TIME;
        const timerLineParameters = getRadius(timeRatio, 370);

        gameState.timeLeft = this.view.timer.value;

        this.view.headerMin.textContent = getFormattedTime(time.min);
        this.view.headerSec.textContent = getFormattedTime(time.sec);
        this.view.timerLine.setAttribute(`stroke-dashoffset`, timerLineParameters.offset);
      }
    };
  }
}

export default new HeaderPresenter();
