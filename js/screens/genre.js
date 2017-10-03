import getElementFromTemplate from '../get-element-from-template.js';
import showScreen from '../show-screen.js';
import winScreen, {winScreenInit} from './result-win.js';
import loseTimeScreen, {loseTimeScreenInit} from './result-lose-time.js';
import loseAttemptsScreen, {loseAttemptsScreenInit} from './result-lose-attempts.js';

const genreScreen = getElementFromTemplate(`\
<section class="main main--level main--level-genre">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">05</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">00</span>
    </div>
  </svg>
  <div class="main-mistakes">
    <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
    <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
    <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
  </div>

  <div class="main-wrap">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio></audio>
            <button class="player-control player-control--play"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </div>
</section>\
`);

const submitBtn = genreScreen.querySelector(`.genre-answer-send`);
const answers = genreScreen.querySelectorAll(`.genre-answer input[name="answer"]`);
let checkedCount = 0;

const resetScreen = () => {
  genreScreen.querySelector(`.genre`).reset();
  submitDisable();
  checkedCount = 0;
  [].forEach.call(answers, (el) => el.removeEventListener(`change`, onAnswerChange));
  submitBtn.removeEventListener(`click`, onSubmitClick);
};

const submitDisable = () => submitBtn.setAttribute(`disabled`, ``);
const submitEnable = () => submitBtn.removeAttribute(`disabled`);

const onSubmitClick = (evt) => {
  evt.preventDefault();
  resetScreen();
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      showScreen(winScreen, winScreenInit);
      break;
    case 1:
      showScreen(loseTimeScreen, loseTimeScreenInit);
      break;
    case 2:
      showScreen(loseAttemptsScreen, loseAttemptsScreenInit);
      break;
  }
};

const onAnswerChange = (evt) => {
  checkedCount = evt.target.checked ? checkedCount + 1 : checkedCount - 1;
  if (!checkedCount) {
    submitDisable();
  } else {
    submitEnable();
  }
};

const genreScreenInit = () => {
  submitDisable();
  [].forEach.call(answers, (el) => el.addEventListener(`change`, onAnswerChange));
  submitBtn.addEventListener(`click`, onSubmitClick);
};


export {genreScreenInit};
export default genreScreen;
