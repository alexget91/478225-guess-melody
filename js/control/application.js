import showScreen from '../dom-helpers/show-screen.js';
import welcomeScreen from '../screens/welcome-screen.js';
import artistScreen from '../screens/artist-screen.js';
import genreScreen from '../screens/genre-screen.js';
import resultScreen from '../screens/result-screen.js';
import headerPresenter from '../screens/header-presenter.js';

export default class Application {
  static showWelcome() {
    welcomeScreen.initialize();
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
