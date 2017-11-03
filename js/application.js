import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import ConvertData from './data/convert-data';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const routes = {
  [ControllerId.WELCOME]: welcomePresenter,
  [ControllerId.GAME]: GamePresenter,
  [ControllerId.RESULT]: resultPresenter
};

export default class Application {
  static initialize() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };

    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = routes[id];

    if (controller) {
      controller.initialize(data);
    }
  }

  static showWelcome() {
    location.hash = ControllerId.WELCOME;
  }

  static showGameScreen(state = ``) {
    location.hash = `${ControllerId.GAME}?${ConvertData.encode(state)}`;
  }

  static showResult(state) {
    location.hash = `${ControllerId.RESULT}?${ConvertData.encode(state)}`;
  }
}
