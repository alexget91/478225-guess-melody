import checkAnswer from '../control/check-answer.js';

const artistScreenTemplate = (data) => {
  let answers = ``;

  data.answers.forEach((el) => {
    const right = el.right ? `true` : ``;

    answers += `\
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${el.id}" name="answer" value="val-${el.id}" data-right="${right}"/>
        <label class="main-answer" for="answer-${el.id}">
          <img class="main-answer-preview" src="${el.image}"
              alt="${el.name}" width="134" height="134">
          ${el.name}
        </label>
      </div>`;
  });

  return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <h2 class="title main-title">${data.title}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${data.melody.src}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${answers}
      </form>
    </div>
  </section>`;
};

const artistScreenInit = (gameState) => {
  const answers = document.querySelectorAll(`.main-answer`);
  const player = document.querySelector(`.player`);
  const playerControl = player.querySelector(`.player-control`);
  const audioSrc = player.querySelector(`audio`).getAttribute(`src`);
  const audio = new Audio(audioSrc);

  audio.play();

  const onAnswerClick = (evt) => {
    [].forEach.call(answers, (el) => el.removeEventListener(`click`, onAnswerClick));
    playerControl.removeEventListener(`click`, onPlayerClick);

    const answerLabel = evt.target.classList.contains(`main-answer-preview`) ? evt.target.parentElement : evt.target;
    const isRight = Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);

    audio.pause();
    checkAnswer(gameState, isRight, 30);
  };

  const onPlayerClick = (evt) => {
    if (evt.target.classList.contains(`player-control--pause`)) {
      evt.target.classList.remove(`player-control--pause`);
      audio.pause();
    } else {
      evt.target.classList.add(`player-control--pause`);
      audio.play();
    }
  };

  [].forEach.call(answers, (el) => el.addEventListener(`click`, onAnswerClick));
  playerControl.addEventListener(`click`, onPlayerClick);
};


export {artistScreenInit};
export default artistScreenTemplate;
