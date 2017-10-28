import AbstractView from './abstract-view.js';
import logo from './logo.js';

export default class WelcomeView extends AbstractView {
  constructor(data) {
    super();
    this.startText = data.startText;
    this.contentTitle = data.content.title;
    this.contentText = data.content.text;
  }

  get template() {
    return `<section class="main main--welcome">
      ${logo}
      <button class="main-play">${this.startText}</button>
      <h2 class="title main-title">${this.contentTitle}</h2>
      <p class="text main-text">
        ${this.contentText}
      </p>
    </section>`;
  }

  bind() {
    this.play = this.element.querySelector(`.main-play`);
    this.play.addEventListener(`click`, this.onPlayClick);
  }

  unbind() {
    this.play.removeEventListener(`click`, this.onPlayClick);
  }

  onPlayClick() {

  }
}
