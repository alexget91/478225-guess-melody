import HeaderView from '../views/header-view.js';
import getMinutes from '../data/get-minutes.js';
import getFormattedTime from '../data/get-formatted-time.js';
import gameData, {gameState} from '../data/game-data.js';
import showGameEnd from '../control/show-game-end.js';
import artist from './artist.js';
import genre from './genre.js';

const header = new HeaderView();

header.onTimerTick = () => {
  header.timer = header.timer.tick();

  if (!header.timer) {
    header.unbind();

    if (gameState.currentLevelIsGenre) {
      genre.audioPause();
    } else {
      artist.audio.pause();
    }

    showGameEnd();
  } else {

    if (header.timer.value < gameData.TIMER_BLINK_TIME) {
      header.element.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
    }

    const time = getMinutes(header.timer.value);

    gameState.timeLeft = header.timer.value;

    header.headerMin.textContent = getFormattedTime(time.min);
    header.headerSec.textContent = getFormattedTime(time.sec);
  }
};

export default header;
