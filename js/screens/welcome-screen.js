import WelcomeView from '../views/welcome-view';
import dataWelcome from '../screen-data/data-welcome';
import GameScreen from '../screens/game-screen';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView(dataWelcome);
  }

  initialize(data) {
    if (typeof data !== `undefined`) {
      this.view.data = data;
    }

    this.view.onPlayClick = () => {
      GameScreen.showQuestion(true);
    };
  }
}

export default new WelcomeScreen();
