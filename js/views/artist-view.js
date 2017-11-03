import AbstractView from './abstract-view';
import {gameMusic} from '../data/game-data';

export default class ArtistView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    let answers = ``;

    this.data.answers.forEach((el, i) => {
      const right = el.isCorrect ? `true` : ``;

      answers += `\
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}" data-right="${right}"/>
          <label class="main-answer" for="answer-${i}">
            <img class="main-answer-preview" src="${el.image.url}"
                alt="${el.title}" width="${el.image.width}" height="${el.image.height}">
            ${el.title}
          </label>
        </div>`;
    });

    return `\
      <div class="main-wrap" data-classes="main--level main--level-artist">
        <h2 class="title main-title">${this.data.question}</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this.data.src}"></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
          ${answers}
        </form>
      </div>`;
  }

  show() {
    const classes = this.element.dataset.classes;
    const main = document.querySelector(`.main`);
    const mainWrap = main.querySelector(`.main-wrap`);

    main.classList = `main ${classes}`;
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
    // this.audio = new Audio(this.player.querySelector(`audio`).getAttribute(`src`));
    this.audio = gameMusic[this.player.querySelector(`audio`).getAttribute(`src`)];
    // this.audio.currentTime = 0;

    this.audioToggle(true);

    [].forEach.call(this.answers, (el) => el.addEventListener(`click`, this.onAnswerClick));
    this.playerControl.addEventListener(`click`, this.onPlayerClick);
  }

  unbind() {
    [].forEach.call(this.answers, (el) => el.removeEventListener(`click`, this.onAnswerClick));
    this.playerControl.removeEventListener(`click`, this.onPlayerClick);
  }

  audioToggle(play) {
    if (!play || !this.audio.paused) {
      this.audio.pause();
    } else {
      this.audio.play();
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
