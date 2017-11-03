import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import getFormattedTime from './data/get-formatted-time';
import SplashScreen from './views/splash-screen';
import Loader from './loader';
import transformData from './data/transform-data';
import preloadAudio from './data/preload-audio';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
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
    Application.routes = {
      [ControllerId.WELCOME]: welcomePresenter,
      [ControllerId.GAME]: GamePresenter,
      [ControllerId.RESULT]: resultPresenter
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };

    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];

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

const splash = new SplashScreen();
splash.show();

Loader.loadData()
    .then(transformData)
    .then((links) => preloadAudio(links))
    .catch(window.console.error);
