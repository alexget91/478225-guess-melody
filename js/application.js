import showScreen from './dom-helpers/show-screen';
import welcomeScreen from './screens/welcome-screen';
import artistScreen from './screens/artist-screen';
import genreScreen from './screens/genre-screen';
import resultScreen from './screens/result-screen';
import headerPresenter from './screens/header-presenter';
import {gameState} from './data/game-data';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

export default class Application {
  static init(questData) {
    Application.routes = {
      [ControllerId.WELCOME]: welcomeScreen,
      // [ControllerId.GAME]: new GameScreen(questData),
      [ControllerId.RESULT]: resultScreen
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
    const controller = Application.routes[id];

    /* if (controller) {
      controller.init();
    } */
  }

  static showWelcome(data) {
    history.pushState(null, null, `/`);
    welcomeScreen.initialize(data);
    showScreen(welcomeScreen.view.element);
  }

  static showArtist(data) {
    artistScreen.initialize(data);
    showScreen(artistScreen.view.element);
  }

  static showGenre(data) {
    genreScreen.initialize(data);
    showScreen(genreScreen.view.element);
  }

  static showResult(data) {
    resultScreen.initialize(data);
    showScreen(resultScreen.view.element);
  }

  static showHeader(timeLeft, mistakesCount) {
    headerPresenter.initialize(timeLeft, mistakesCount);
    showScreen(headerPresenter.view.element);
  }
}
