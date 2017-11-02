import WelcomeView from '../views/welcome-view';
import dataWelcome from '../screen-data/data-welcome';
import GamePresenter from '../presenters/game-presenter';
import Application from '../application';

class WelcomePresenter {
  initialize() {
    this.view = new WelcomeView(dataWelcome);

    const view = this.view;

    Application.init();
    history.pushState(null, null, `/`);

    view.onPlayClick = () => {
      GamePresenter.initialize(true);
    };

    view.show();
  }
}

export default new WelcomePresenter();
