import WelcomeView from '../views/welcome-view';
import dataWelcome from '../screen-data/data-welcome';
import GamePresenter from '../presenters/game-presenter';

class WelcomePresenter {
  initialize() {
    this.view = new WelcomeView(dataWelcome);

    const view = this.view;

    view.onPlayClick = () => {
      GamePresenter.initialize(true);
    };

    view.show();
  }
}

export default new WelcomePresenter();
