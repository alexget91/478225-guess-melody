import {gameSequence as gameSequenceInitial, gameAnswers, gameState} from '../data/game-data';
import artistScreen from '../screens/artist-screen';
import genreScreen from '../screens/genre-screen';
import headerScreen from '../screens/header-screen';
import Application from '../application';

let gameSequence;

export default class GameScreen {

  static initialize(reset) {
    if (reset) {
      gameSequence = [...gameSequenceInitial];
      gameAnswers.length = 0;
      gameState.reset();
    }

    const question = gameSequence.shift();

    if (question) {

      if (reset) {
        headerScreen.initialize(gameState.timeLeft, gameState.mistakesCount);
      }

      this.timeStart = headerScreen.view.timer.value;

      if (question.typeArtist) {
        artistScreen.initialize(question);
      } else {
        genreScreen.initialize(question);
      }

    } else {
      Application.showResult();
    }
  }

  static onAnswerSubmit(view, isRight) {
    const timeEnd = headerScreen.view.timer.value;

    view.unbind();
    view.audioToggle();

    this.checkAnswer(isRight, this.timeStart - timeEnd);
  }

  static checkAnswer(isRight, time) {
    gameAnswers.push({isRight, time});

    if (!isRight) {
      gameState.notesLeft -= 1;
    }

    if (!gameState.notesLeft) {

      Application.showResult();

    } else {

      if (!isRight) {
        headerScreen.view.showMistakes();
      }

      this.initialize();
    }
  }
}
