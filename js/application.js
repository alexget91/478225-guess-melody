import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import ConvertData from './data/convert-data';
import splashScreen from './views/splash-screen';
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

splashScreen.show();

Loader.loadData()
    .then(transformData)
    .then((links) => preloadAudio(links))
    .catch(window.console.error);
