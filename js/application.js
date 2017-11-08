import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';
import ConvertData from './data/convert-data';
import splashScreen from './views/splash-screen';
import Loader from './loader';
import transformData from './data/transform-data';
import preloadAudio from './data/preload-audio';

export default class Application {
  static async prepareDataAndInitialize() {
    splashScreen.show();
    this.setWelcomeTimeout();
    try {
      const data = await Loader.loadData();
      const links = transformData(data);
      preloadAudio(links);
    } catch (error) {
      throw new Error(error);
    }
  }

  static setWelcomeTimeout() {
    const PRELOAD_WAITING_TIME = 10000;

    this.welcomeTimeout = setTimeout(() => {
      Application.showWelcome();
    }, PRELOAD_WAITING_TIME);
  }

  static clearWelcomeTimeout() {
    if (typeof this.welcomeTimeout !== `undefined`) {
      clearTimeout(this.welcomeTimeout);
    }
  }

  static showWelcome() {
    this.clearWelcomeTimeout();
    welcomePresenter.initialize();
  }

  static showGameScreen(state = ``) {
    GamePresenter.initialize(ConvertData.encode(state));
  }

  static showResult(state) {
    resultPresenter.initialize(ConvertData.encode(state));
  }
}

Application.prepareDataAndInitialize();
