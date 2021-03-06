import AbstractView from './abstract-view';
import logo from '../views/logo';

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

  show() {
    const app = document.querySelector(`.app`);

    app.replaceChild(this.element, app.querySelector(`.main`));
  }

  bind() {
    this.play = this.element.querySelector(`.main-play`);
    this.play.addEventListener(`click`, this.onPlayClick);
  }

  unbind() {
    this.play.removeEventListener(`click`, this.onPlayClick);
  }

  onPlayClick() {
    throw new Error(`Not implemented`);
  }
}
