import showNextQuestion from '../control/show-next-question.js';
import logo from './logo.js';

const welcomeScreenTemplate = (data) => `\
<section class="main main--welcome">
  ${logo}
  <button class="main-play">${data.startText}</button>
  <h2 class="title main-title">${data.content.title}</h2>
  <p class="text main-text">
    ${data.content.text}
  </p>
</section>`;

const welcomeScreenInit = () => {
  const play = document.querySelector(`.main-play`);

  const onPlayClick = () => {
    play.removeEventListener(`click`, onPlayClick);
    showNextQuestion(false, true);
  };

  play.addEventListener(`click`, onPlayClick);
};


export {welcomeScreenInit};
export default welcomeScreenTemplate;
