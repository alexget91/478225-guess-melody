import AbstractView from './abstract-view.js';
import logo from '../screens/logo.js';

export default class WelcomeView extends AbstractView {
  constructor(data) {
    super(data);
  }

  get template() {
    return `\
      <section class="main main--welcome">
        ${logo}
        <button class="main-play">${this.data.startText}</button>
        <h2 class="title main-title">${this.data.content.title}</h2>
        <p class="text main-text">
          ${this.data.content.text}
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
