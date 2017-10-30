import HeaderView from '../views/header-view.js';
import getMinutes from '../data/get-minutes.js';
import getFormattedTime from '../data/get-formatted-time.js';
import gameData, {gameState} from '../data/game-data.js';
import showGameEnd from '../control/show-game-end.js';
import artistScreen from './artist-screen.js';
import genreScreen from './genre-screen.js';
import getRadius from '../data/get-radius';

const header = new HeaderView();

header.onTimerTick = () => {
  header.timer = header.timer.tick();

  if (!header.timer) {
    header.unbind();

    if (gameState.currentLevelIsGenre) {
      genreScreen.view.audioPause();
    } else {
      artistScreen.view.audio.pause();
    }

    showGameEnd();
  } else {

    if (header.timer.value < gameData.TIMER_BLINK_TIME) {
      header.element.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
    }

    const time = getMinutes(header.timer.value);
    const timeRatio = header.timer.value / gameData.GAME_TIME;
    const timerLineParameters = getRadius(timeRatio, 370);

    gameState.timeLeft = header.timer.value;

    header.headerMin.textContent = getFormattedTime(time.min);
    header.headerSec.textContent = getFormattedTime(time.sec);
    header.timerLine.setAttribute(`stroke-dashoffset`, timerLineParameters.offset);
  }
};

export default header;
