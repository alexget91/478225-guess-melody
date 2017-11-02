import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';

export default class Application {
  static showWelcome() {
    welcomePresenter.initialize();
  }

  static showGameScreen() {
    GamePresenter.initialize();
  }

  static showResult() {
    resultPresenter.initialize();
  }
}
