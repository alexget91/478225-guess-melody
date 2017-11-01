import getElementFromTemplate from '../dom-helpers/get-element-from-template';

export default class AbstractView {
  constructor(data) {
    this.data = data;
  }

  get template() {
    // возвращает строку, содержащую разметку
    throw new Error(`Not implemented`);
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
    throw new Error(`Not implemented`);
  }

  unbind() {
    // удаляет обработчики событий
    throw new Error(`Not implemented`);
  }
}
