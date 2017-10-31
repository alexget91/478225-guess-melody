import getMistakesHTML from '../views/get-mistakes-html';
import headerPresenter from '../screens/header-presenter';

export default () => {
  headerPresenter.view.element.querySelector(`.main-mistakes`).innerHTML = getMistakesHTML();
};
