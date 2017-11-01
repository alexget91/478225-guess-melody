import welcomeScreen from './screens/welcome-screen';
import GameScreen from './screens/game-screen';
import resultScreen from './screens/result-screen';

export default class Application {
  static showWelcome() {
    welcomeScreen.initialize();
  }

  static showGameScreen() {
    GameScreen.initialize();
  }

  static showResult() {
    resultScreen.initialize();
  }
}
