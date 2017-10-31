import AbstractView from './abstract-view';

export default class ArtistView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    let answers = ``;

    this.data.answers.forEach((el) => {
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

    return `\
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">${this.data.title}</h2>
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.data.melody.src}"></audio>
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
  }

  bind() {
    this.answers = this.element.querySelectorAll(`.main-answer`);
    this.player = this.element.querySelector(`.player`);
    this.playerControl = this.player.querySelector(`.player-control`);
    this.audio = new Audio(this.player.querySelector(`audio`).getAttribute(`src`));

    this.audio.play();

    [].forEach.call(this.answers, (el) => el.addEventListener(`click`, this.onAnswerClick));
    this.playerControl.addEventListener(`click`, this.onPlayerClick);
  }

  unbind() {
    [].forEach.call(this.answers, (el) => el.removeEventListener(`click`, this.onAnswerClick));
    this.playerControl.removeEventListener(`click`, this.onPlayerClick);
  }

  onAnswerClick() {
    throw new Error(`Not implemented`);
  }

  onPlayerClick() {
    throw new Error(`Not implemented`);
  }
}
