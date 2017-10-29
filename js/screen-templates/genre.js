import checkAnswer from '../control/check-answer.js';

const genreScreenTemplate = (data) => {
  let answers = ``;

  data.answers.forEach((el) => {
    const right = el.right ? `true` : ``;

    answers += `\
    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio data-id="${el.id}" src="${el.src}"></audio>
          <button class="player-control"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-${el.id}" id="a-${el.id}" data-right="${right}">
      <label class="genre-answer-check" for="a-${el.id}"></label>
    </div>`;
  });

  return `\
    <section class="main main--level main--level-genre">
      <div class="main-wrap">
        <h2 class="title">${data.title}</h2>
        <form class="genre" data-right-length="${data.correctLength}">
          ${answers}
          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </div>
    </section>`;
};

const genreScreenInit = (gameState) => {
  const genreScreen = document.querySelector(`.main--level-genre`);
  const submitBtn = genreScreen.querySelector(`.genre-answer-send`);
  const answers = genreScreen.querySelectorAll(`.genre-answer input[name="answer"]`);
  const userAnswer = {};
  const players = {};
  let isRight;
  let playingID = null;

  [].forEach.call(genreScreen.querySelectorAll(`.player`), (el) => {
    const audio = el.querySelector(`audio`);

    players[audio.dataset.id] = {
      audio: new Audio(audio.getAttribute(`src`)),
      control: el.querySelector(`.player-control`)
    };
  });

  const submitToggle = (disable) => {
    if (disable) {
      submitBtn.setAttribute(`disabled`, ``);
    } else {
      submitBtn.removeAttribute(`disabled`);
    }
  };

  const audioPlay = () => {
    if (playingID) {
      players[playingID].audio.play();
    }
  };

  const audioPause = () => {
    if (playingID) {
      players[playingID].control.classList.remove(`player-control--pause`);
      players[playingID].audio.pause();
      playingID = null;
    }
  };

  const onPlayerClick = (evt) => {
    evt.preventDefault();

    if (evt.target.classList.contains(`player-control--pause`)) {
      audioPause();
    } else {
      audioPause();
      evt.target.classList.add(`player-control--pause`);
      playingID = evt.target.parentElement.querySelector(`audio`).dataset.id;
      audioPlay();
    }
  };

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    [].forEach.call(answers, (el) => el.removeEventListener(`change`, onAnswerChange));
    [].forEach.call(Object.values(players), (el) => el.control.removeEventListener(`click`, onPlayerClick));
    submitBtn.removeEventListener(`click`, onSubmitClick);

    audioPause();
    checkAnswer(gameState, isRight, 30);
  };

  const onAnswerChange = (evt) => {
    if (evt.target.checked) {
      userAnswer[evt.target.getAttribute(`id`)] = evt.target.dataset.right;
    } else {
      delete userAnswer[evt.target.getAttribute(`id`)];
    }

    isRight = Object.keys(userAnswer).length === parseInt(genreScreen.querySelector(`.genre`).dataset.rightLength, 10)
              && Object.values(userAnswer).reduce((result, it) => (result && Boolean(it)), true);

    submitToggle(!Object.keys(userAnswer).length);
  };

  submitToggle(true);
  [].forEach.call(answers, (el) => el.addEventListener(`change`, onAnswerChange));
  [].forEach.call(Object.values(players), (el) => el.control.addEventListener(`click`, onPlayerClick));
  submitBtn.addEventListener(`click`, onSubmitClick);
};


export {genreScreenInit};
export default genreScreenTemplate;
