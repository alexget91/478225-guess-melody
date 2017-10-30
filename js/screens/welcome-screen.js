import showNextQuestion from '../control/show-next-question.js';
import WelcomeView from '../views/welcome-view.js';
import dataWelcome from '../screen-data/data-welcome.js';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView(dataWelcome);
  }

  initialize() {
    this.view.onPlayClick = () => {
      showNextQuestion(true);
    };
  }
}

export default new WelcomeScreen();
