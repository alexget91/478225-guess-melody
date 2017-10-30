import showScreen from '../dom-helpers/show-screen.js';
import clearScreen from '../dom-helpers/clear-screen.js';
import ResultView from '../views/result-view.js';
import welcomeScreen from '../screens/welcome-screen.js';
import dataWelcome from '../screen-data/data-welcome.js';

class ResultScreen {
  constructor() {
    this.view = new ResultView();
  }

  initialize() {
    this.view.onReplayClick = () => {
      this.view.unbind();
      welcomeScreen.view.data = dataWelcome;
      // welcomeScreen.initialize();
      clearScreen();
      showScreen(welcomeScreen.view.element);
    };
  }
}

export default new ResultScreen();
