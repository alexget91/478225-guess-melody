import showScreen from './dom-helpers/show-screen';
import welcomeScreen from './screens/welcome-screen';
import artistScreen from './screens/artist-screen';
import genreScreen from './screens/genre-screen';
import resultScreen from './screens/result-screen';
import headerPresenter from './screens/header-presenter';

export default class Application {
  static showWelcome(data) {
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
