import getElementFromTemplate from '../get-element-from-template.js';
import showScreen from '../show-screen.js';
import welcomeScreen, {welcomeScreenInit} from './welcome.js';

const loseTimeScreen = getElementFromTemplate(`\
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>\
`);

const replay = loseTimeScreen.querySelector(`.main-replay`);

const onReplayClick = () => {
  replay.removeEventListener(`click`, onReplayClick);
  showScreen(welcomeScreen, welcomeScreenInit);
};

const loseTimeScreenInit = () => replay.addEventListener(`click`, onReplayClick);


export {loseTimeScreenInit};
export default loseTimeScreen;
