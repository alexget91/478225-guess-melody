import showScreen from '../view/show-screen.js';
import clearScreen from '../view/clear-screen.js';
import ResultView from '../views/result-view.js';
import welcome from '../screens/welcome.js';

const result = new ResultView();

result.onReplayClick = () => {
  result.unbind();
  clearScreen();
  showScreen(welcome.element);
};


export default result;
