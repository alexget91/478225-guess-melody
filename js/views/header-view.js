import AbstractView from './abstract-view.js';
import getMistakesHTML from '../views/get-mistakes-html.js';
import getTimer from '../data/get-timer.js';
import getRadius from '../data/get-radius';
import {gameState} from '../data/game-data.js';

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
      <div class="main-mistakes">
        ${getMistakesHTML()}
      </div>
    </div>`;
  }

  bind() {
    this.headerMin = this.element.querySelector(`.timer-value-mins`);
    this.headerSec = this.element.querySelector(`.timer-value-secs`);
    this.timerLine = this.element.querySelector(`.timer-line`);

    this.timer = getTimer(gameState.timeLeft);
    this.timerInterval = setInterval(this.onTimerTick, 1000);
    this.timerLine.setAttribute(`stroke-dasharray`, getRadius(1, 370).stroke);
  }

  unbind() {
    clearInterval(this.timerInterval);
  }

  onTimerTick() {

  }
}
