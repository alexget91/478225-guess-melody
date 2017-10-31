import HeaderView from '../views/header-view.js';
import getMinutes from '../data/get-minutes.js';
import getFormattedTime from '../data/get-formatted-time.js';
import gameData, {gameState} from '../data/game-data.js';
import showGameEnd from '../control/show-game-end.js';
import artistScreen from './artist-screen.js';
import genreScreen from './genre-screen.js';
import getRadius from '../data/get-radius';
import getDataHeader from '../screen-data/get-data-header.js';

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

        showGameEnd();
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
