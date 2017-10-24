import showScreen from '../show-screen.js';
import clearScreen from '../clear-screen.js';
import welcomeScreen, {welcomeScreenInit} from './welcome.js';

const loseAttemptsScreenTemplate = `\
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`;

const loseAttemptsScreenInit = () => {
  const replay = document.querySelector(`.main-replay`);

  const onReplayClick = () => {
    replay.removeEventListener(`click`, onReplayClick);
    clearScreen();
    showScreen(welcomeScreen, welcomeScreenInit);
  };

  replay.addEventListener(`click`, onReplayClick);
};


export {loseAttemptsScreenInit};
export default loseAttemptsScreenTemplate;
