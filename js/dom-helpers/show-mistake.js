import header from '../screens/header.js';
import getMistakesHTML from '../views/get-mistakes-html.js';

export default () => {
  header.element.querySelector(`.main-mistakes`).innerHTML = getMistakesHTML();
};
