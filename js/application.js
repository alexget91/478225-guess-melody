import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import ConvertData from './data/convert-data';
import SplashScreen from './views/splash-screen';
import Loader from './loader';
import transformData from './data/transform-data';
import preloadAudio from './data/preload-audio';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
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
    welcomePresenter.initialize();
  }

  static showGameScreen(state = ``) {
    GamePresenter.initialize(ConvertData.encode(state));
  }

  static showResult(state) {
    resultPresenter.initialize(ConvertData.encode(state));
  }
}

const splash = new SplashScreen();
splash.show();

Loader.loadData()
    .then(transformData)
    .then((links) => preloadAudio(links))
    // .then(() => Application.initialize())
    .catch(window.console.error);
