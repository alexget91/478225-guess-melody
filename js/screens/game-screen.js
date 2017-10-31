import {gameSequence as gameSequenceInitial, gameAnswers, gameState} from '../data/game-data';
import clearScreen from '../dom-helpers/clear-screen';
import Application from '../application';
import {ResultScreen} from '../screens/result-screen';
import showMistake from '../dom-helpers/show-mistake';

let gameSequence;

export default class GameScreen {
  static initialize() {
    gameSequence = [...gameSequenceInitial];
    gameAnswers.length = 0;
    gameState.reset();
  }

  static showQuestion(reset) {
    if (reset) {
      this.initialize();
    }

    const question = gameSequence.shift();

    // Application.init();

    if (question) {

      if (reset) {
        clearScreen();
        Application.showHeader(gameState.timeLeft, gameState.mistakesCount);
      } else {
        clearScreen(`.main-wrap`);
      }

      gameState.currentLevel++;

      if (question.typeArtist) {
        history.pushState(null, null, `#game?${gameState.currentLevel}${gameState.notesLeft}${gameState.timeLeft}`);
        gameState.currentLevelIsGenre = false;
        Application.showArtist(question);
      } else {
        history.pushState(null, null, `#game?${gameState.currentLevel}${gameState.notesLeft}${gameState.timeLeft}`);
        gameState.currentLevelIsGenre = true;
        Application.showGenre(question);
      }

    } else {
      ResultScreen.showGameEnd();
    }
  }

  static checkAnswer(isRight, time) {
    gameAnswers.push({isRight, time});

    if (!isRight) {
      gameState.notesLeft -= 1;
    }

    if (!gameState.notesLeft) {

      ResultScreen.showGameEnd();

    } else {

      if (!isRight) {
        showMistake();
      }

      GameScreen.showQuestion();
    }
  }
}
