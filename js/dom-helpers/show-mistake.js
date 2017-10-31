import getMistakesHTML from '../views/get-mistakes-html.js';
import headerPresenter from '../screens/header-presenter.js';

export default () => {
  headerPresenter.view.element.querySelector(`.main-mistakes`).innerHTML = getMistakesHTML();
};
