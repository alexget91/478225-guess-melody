import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import logo from './logo.js';
import welcomeScreenTemplate, {welcomeScreenInit} from './welcome.js';
import dataWelcome from '../screen-data/data-welcome.js';

const resultScreenTemplate = (data) => {
  const comparison = data.comparison ? `<span class="main-comparison">${data.comparison}</span>` : ``;
  return `\
    <section class="main main--result">
      ${logo}

      <h2 class="title">${data.title}</h2>
      <div class="main-stat">${data.statistics}</div>
      ${comparison}
      <span role="button" tabindex="0" class="main-replay">${data.replay}</span>
    </section>`;
};

const resultScreenInit = () => {
  const replay = document.querySelector(`.main-replay`);

  const onReplayClick = () => {
    replay.removeEventListener(`click`, onReplayClick);
    clearScreen();
    showScreen(welcomeScreenTemplate(dataWelcome), welcomeScreenInit);
  };

  replay.addEventListener(`click`, onReplayClick);
};


export {resultScreenInit};
export default resultScreenTemplate;
