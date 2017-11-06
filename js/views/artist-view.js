import AbstractView from './abstract-view';
import {gameMusic} from '../data/game-data';

export default class ArtistView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    return `\
      <div class="main-wrap" data-classes="main--level main--level-artist">
        <h2 class="title main-title">${this.data.question}</h2>
        <div class="player-wrapper">
          <div class="player">
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
  ${this.data.answers.map((el, i) => {
    return `\
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}" data-right="${el.isCorrect ? `true` : ``}"/>
            <label class="main-answer" for="answer-${i}">
              <img class="main-answer-preview" src="${el.image.url}"
                  alt="${el.title}" width="${el.image.width}" height="${el.image.height}">
              ${el.title}
            </label>
          </div>`;
  }).join(``)}
        </form>
      </div>`;
  }

  show() {
    const classes = this.element.dataset.classes;
    const main = document.querySelector(`.main`);
    const mainWrap = main.querySelector(`.main-wrap`);

    main.setAttribute(`class`, `main ${classes}`);

    if (mainWrap) {
      main.replaceChild(this.element, mainWrap);
    } else {
      main.appendChild(this.element);
    }
  }

  bind() {
    this.answers = this.element.querySelectorAll(`.main-answer`);
    this.player = this.element.querySelector(`.player`);
    this.playerControl = this.player.querySelector(`.player-control`);
    this.audio = gameMusic[this.data.src];
    this.audio.currentTime = 0;

    this.audioToggle(true);

    [].forEach.call(this.answers, (el) => el.addEventListener(`click`, this.onAnswerClick));
    this.playerControl.addEventListener(`click`, this.onPlayerClick);
  }

  unbind() {
    [].forEach.call(this.answers, (el) => el.removeEventListener(`click`, this.onAnswerClick));
    this.playerControl.removeEventListener(`click`, this.onPlayerClick);
  }

  audioToggle(play) {
    if ((!play || !this.audio.paused) && typeof this.playPromise !== `undefined`) {
      this.playPromise
          .then(() => this.audio.pause())
          .catch((error) => {
            throw new Error(error);
          });
    } else {
      this.playPromise = this.audio.play();
    }
  }

  playButtonToggle(evt) {
    const evtClasses = evt.target.classList;
    const playerPauseClass = `player-control--pause`;

    if (evtClasses.contains(playerPauseClass)) {
      evtClasses.remove(playerPauseClass);
    } else {
      evtClasses.add(playerPauseClass);
    }
  }

  checkAnswer(evtTarget) {
    const answerLabel = evtTarget.classList.contains(`main-answer-preview`) ? evtTarget.parentElement : evtTarget;

    return Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);
  }

  onAnswerClick() {
    throw new Error(`Not implemented`);
  }

  onPlayerClick() {
    throw new Error(`Not implemented`);
  }
}
