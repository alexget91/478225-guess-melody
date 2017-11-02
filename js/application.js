import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import getFormattedTime from './data/get-formatted-time';

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

const dataEncode = (state) => {
  let code = ``;

  if (state) {
    code = Object.values(state).reduce((result, it) => {
      result += getFormattedTime(it);
      return result;
    }, ``);
  }

  return code;
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
    location.hash = `${ControllerId.GAME}?${dataEncode(state)}`;
  }

  static showResult(state) {
    location.hash = `${ControllerId.RESULT}?${dataEncode(state)}`;
  }
}
