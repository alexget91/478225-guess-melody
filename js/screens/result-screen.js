import clearScreen from '../dom-helpers/clear-screen.js';
import ResultView from '../views/result-view.js';
import welcomeScreen from '../screens/welcome-screen.js';
import dataWelcome from '../screen-data/data-welcome.js';
import Application from '../control/application.js';

class ResultScreen {
  constructor() {
    this.view = new ResultView();
  }

  initialize(data) {
    if (typeof data !== `undefined`) {
      this.view.data = data;
    }

    this.view.onReplayClick = () => {
      this.view.unbind();
      welcomeScreen.view.data = dataWelcome;
      clearScreen();
      Application.showWelcome();
    };
  }
}

export default new ResultScreen();
