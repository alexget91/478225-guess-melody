import getElementFromTemplate from '../get-element-from-template.js';
import showScreen from '../show-screen.js';
import artistScreen, {artistScreenInit} from './artist.js';

const welcomeScreen = getElementFromTemplate(`\
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>\
`);

const play = welcomeScreen.querySelector(`.main-play`);

const onPlayClick = () => {
  play.removeEventListener(`click`, onPlayClick);
  showScreen(artistScreen, artistScreenInit);
};

const welcomeScreenInit = () => play.addEventListener(`click`, onPlayClick);


export {welcomeScreenInit};
export default welcomeScreen;
