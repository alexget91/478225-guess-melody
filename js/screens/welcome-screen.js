import WelcomeView from '../views/welcome-view';
import dataWelcome from '../screen-data/data-welcome';
import GameScreen from '../screens/game-screen';

class WelcomeScreen {
  initialize() {
    this.view = new WelcomeView(dataWelcome);

    const view = this.view;

    view.onPlayClick = () => {
      GameScreen.initialize(true);
    };

    view.show();
  }
}

export default new WelcomeScreen();
