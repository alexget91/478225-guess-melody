import AbstractView from './abstract-view.js';

export default class GenreView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    let answers = ``;

    this.data.answers.forEach((el) => {
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
          <h2 class="title">${this.data.title}</h2>
          <form class="genre" data-right-length="${this.data.correctLength}">
            ${answers}
            <button class="genre-answer-send" type="submit">Ответить</button>
          </form>
        </div>
      </section>`;
  }

  bind() {
    this.genreScreen = this.element.querySelector(`.main--level-genre`);
    this.submitBtn = this.element.querySelector(`.genre-answer-send`);
    this.answers = this.element.querySelectorAll(`.genre-answer input[name="answer"]`);
    this.playingID = null;
    this.players = {};
    this.userAnswer = {};

    [].forEach.call(this.element.querySelectorAll(`.player`), (el) => {
      const audio = el.querySelector(`audio`);

      this.players[audio.dataset.id] = {
        audio: new Audio(audio.getAttribute(`src`)),
        control: el.querySelector(`.player-control`)
      };
    });

    this.submitToggle(true);
    [].forEach.call(this.answers, (el) => el.addEventListener(`change`, this.onAnswerChange));
    [].forEach.call(Object.values(this.players), (el) => el.control.addEventListener(`click`, this.onPlayerClick));
    this.submitBtn.addEventListener(`click`, this.onSubmitClick);
  }

  unbind() {
    [].forEach.call(this.answers, (el) => el.removeEventListener(`change`, this.onAnswerChange));
    [].forEach.call(Object.values(this.players), (el) => el.control.removeEventListener(`click`, this.onPlayerClick));
    this.submitBtn.removeEventListener(`click`, this.onSubmitClick);
  }

  submitToggle(disable) {
    if (disable) {
      this.submitBtn.setAttribute(`disabled`, ``);
    } else {
      this.submitBtn.removeAttribute(`disabled`);
    }
  }

  audioPlay() {
    if (this.playingID) {
      this.players[this.playingID].audio.play();
    }
  }

  audioPause() {
    if (this.playingID) {
      this.players[this.playingID].control.classList.remove(`player-control--pause`);
      this.players[this.playingID].audio.pause();
      this.playingID = null;
    }
  }

  onPlayerClick() {
    throw new Error(`Not implemented`);
  }

  onSubmitClick() {
    throw new Error(`Not implemented`);
  }

  onAnswerChange() {
    throw new Error(`Not implemented`);
  }
}
