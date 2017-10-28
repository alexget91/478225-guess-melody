import getElementFromTemplate from '../view/get-element-from-template';

export default class AbstractView {
  get template() {
    // возвращает строку, содержащую разметку
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {
    // добавляет обработчики событий
  }

  unbind() {
    // удаляет обработчики событий
  }
}
