import welcomePresenter from './presenters/welcome-presenter';
import GamePresenter from './presenters/game-presenter';
import resultPresenter from './presenters/result-presenter';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

export default class Application {
  static init(questData) {
    Application.routes = {
      [ControllerId.WELCOME]: welcomePresenter,
      // [ControllerId.GAME]: new GameScreen(questData),
      [ControllerId.RESULT]: resultPresenter
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      console.log(hashValue);
      Application.changeHash(hashValue);
    };

    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id) {
    // const controller = Application.routes[id];
    console.log(`changeHash`);

    /* if (controller) {
      controller.init();
    } */
  }

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
