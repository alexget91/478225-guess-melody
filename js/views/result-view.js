import AbstractView from './abstract-view.js';
import logo from '../views/logo.js';

export default class ResultView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    const comparison = this.data.comparison ? `<span class="main-comparison">${this.data.comparison}</span>` : ``;

    return `\
      <section class="main main--result">
        ${logo}

        <h2 class="title">${this.data.title}</h2>
        <div class="main-stat">${this.data.statistics}</div>
        ${comparison}
        <span role="button" tabindex="0" class="main-replay">${this.data.replay}</span>
      </section>`;
  }

  bind() {
    this.replay = this.element.querySelector(`.main-replay`);

    this.replay.addEventListener(`click`, this.onReplayClick);
  }

  unbind() {
    this.replay.removeEventListener(`click`, this.onReplayClick);
  }

  onReplayClick() {
    throw new Error(`Not implemented`);
  }
}
