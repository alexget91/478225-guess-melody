import showScreen from '../show-screen.js';
import clearScreen from '../clear-screen.js';
import winScreen, {winScreenInit} from './result-win.js';
import loseTimeScreen, {loseTimeScreenInit} from './result-lose-time.js';
import loseAttemptsScreen, {loseAttemptsScreenInit} from './result-lose-attempts.js';

const genreScreenTemplate = `\
<section class="main main--level main--level-genre">
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
</section>`;

const genreScreenInit = () => {
  const genreScreen = document.querySelector(`.main--level-genre`);
  const submitBtn = genreScreen.querySelector(`.genre-answer-send`);
  const answers = genreScreen.querySelectorAll(`.genre-answer input[name="answer"]`);
  let checkedCount = 0;

  const submitDisable = () => submitBtn.setAttribute(`disabled`, ``);
  const submitEnable = () => submitBtn.removeAttribute(`disabled`);

  const onSubmitClick = (evt) => {
    evt.preventDefault();
    [].forEach.call(answers, (el) => el.removeEventListener(`change`, onAnswerChange));
    submitBtn.removeEventListener(`click`, onSubmitClick);
    clearScreen();
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

  submitDisable();
  [].forEach.call(answers, (el) => el.addEventListener(`change`, onAnswerChange));
  submitBtn.addEventListener(`click`, onSubmitClick);
};


export {genreScreenInit};
export default genreScreenTemplate;
