import getNumEnding from '../data/get-num-ending';
import AbstractView from './abstract-view';
import logo from '../views/logo';

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

  show() {
    const app = document.querySelector(`.app`);

    app.replaceChild(this.element, app.querySelector(`.main`));
  }

  bind() {
    this.replay = this.element.querySelector(`.main-replay`);

    this.replay.addEventListener(`click`, this.onReplayClick);
  }

  unbind() {
    this.replay.removeEventListener(`click`, this.onReplayClick);
  }

  showComparison(comparison) {
    const comparisonElement = this.element.querySelector(`.main-comparison`);

    if (comparisonElement) {
      comparisonElement.innerHTML = `Вы заняли ${comparison.place}-е место из ${comparison.playersCount}\
          ${getNumEnding(0, [`игрока`, `игроков`, `игроков`])}. Это&nbsp;лучше чем у&nbsp;${comparison.percent}%&nbsp;игроков`;
    }
  }

  onReplayClick() {
    throw new Error(`Not implemented`);
  }
}
