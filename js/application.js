import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import ConvertData from './data/convert-data';
import SplashScreen from './views/splash-screen';
import Loader from './loader';
import transformData from './data/transform-data';
import preloadAudio from './data/preload-audio';

export default class Application {
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
