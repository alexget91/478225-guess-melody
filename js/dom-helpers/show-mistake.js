import headerPresenter from '../screens/header-presenter.js';
import getMistakesHTML from '../screen-data/get-mistakes-html.js';

export default () => {
  headerPresenter.view.element.querySelector(`.main-mistakes`).innerHTML = getMistakesHTML();
};
