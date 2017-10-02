import getElementFromTemplate from '../get-element-from-template.js';
import showScreen from '../show-screen.js';
import artistScreen from './artist.js';

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

welcomeScreen.querySelector(`.main-play`).addEventListener(`click`, function () {
  showScreen(artistScreen);
});

export default welcomeScreen;
