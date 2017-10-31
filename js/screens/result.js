import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import ResultView from '../views/result-view.js';
import welcome from '../screens/welcome.js';
import dataWelcome from '../screen-data/data-welcome.js';

const result = new ResultView();

result.onReplayClick = () => {
  result.unbind();
  welcome.data = dataWelcome;
  clearScreen();
  showScreen(welcome.element);
};


export default result;
