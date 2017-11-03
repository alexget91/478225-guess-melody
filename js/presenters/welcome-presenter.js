import WelcomeView from '../views/welcome-view';
import dataWelcome from '../screen-data/data-welcome';
import Application from '../application';
import {gameSequence} from '../data/game-data';

class WelcomePresenter {
  initialize() {
    history.pushState(null, null, ` `);
    this.view = new WelcomeView(dataWelcome);

    const view = this.view;

    view.onPlayClick = () => {
      Application.showGameScreen();
    };

    view.show();
  }
}

export default new WelcomePresenter();
