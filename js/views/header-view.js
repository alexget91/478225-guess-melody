import AbstractView from './abstract-view';
import getTimer from '../data/get-timer';
import getRadius from '../data/get-radius';
import {gameState} from '../data/game-data';
import getElementFromTemplate from '../dom-helpers/get-element-from-template';

export default class HeaderView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    return `\
      <div class="page-header">
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle
            cx="390" cy="390" r="370"
            class="timer-line"
            style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

          <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
            <span class="timer-value-mins">${this.data.timer.min}</span><!--
            --><span class="timer-value-dots">:</span><!--
            --><span class="timer-value-secs">${this.data.timer.sec}</span>
          </div>
        </svg>
        <div class="main-mistakes"></div>
      </div>`;
  }

  get timer() {
    return this._timer;
  }

  get mistakeElement() {
    if (!this._mistakeElement) {
      this._mistakeElement = getElementFromTemplate(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`);
    }

    return this._mistakeElement;
  }

  show() {
    const main = document.querySelector(`.main`);

    main.innerHTML = ``;
    main.appendChild(this.element);
  }

  showMistakes() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gameState.mistakesCount; i++) {
      fragment.appendChild(this.mistakeElement.cloneNode());
    }

    this.mistakes.innerHTML = ``;
    this.mistakes.appendChild(fragment);
  }

  bind() {
    this.headerMin = this.element.querySelector(`.timer-value-mins`);
    this.headerSec = this.element.querySelector(`.timer-value-secs`);
    this.timerLine = this.element.querySelector(`.timer-line`);
    this.mistakes = this.element.querySelector(`.main-mistakes`);

    this.timerInit();
    this.timerInterval = setInterval(this.onTimerTick, 1000);
    this.timerLine.setAttribute(`stroke-dasharray`, getRadius(1, 370).stroke);
  }

  unbind() {
    clearInterval(this.timerInterval);
  }

  timerInit() {
    this._timer = getTimer(gameState.timeLeft);
  }

  timerTick() {
    this._timer = this.timer.tick();
  }

  timerBlink() {
    this.element.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
  }

  onTimerTick() {

  }
}
