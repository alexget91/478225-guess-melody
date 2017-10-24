import showScreen from '../show-screen.js';
import clearScreen from '../clear-screen.js';
import header from './header.js';
import artistScreen, {artistScreenInit} from './artist.js';

const welcomeScreenTemplate = `\
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>`;

const welcomeScreenInit = () => {
  const play = document.querySelector(`.main-play`);

  const onPlayClick = () => {
    play.removeEventListener(`click`, onPlayClick);
    clearScreen();
    showScreen(header);
    showScreen(artistScreen, artistScreenInit);
  };

  play.addEventListener(`click`, onPlayClick);
};


export {welcomeScreenInit};
export default welcomeScreenTemplate;
