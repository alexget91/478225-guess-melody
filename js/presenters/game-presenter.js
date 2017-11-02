import {gameSequence as gameSequenceInitial, gameAnswers, gameState} from '../data/game-data';
import artistPresenter from '../presenters/artist-presenter';
import genrePresenter from '../presenters/genre-presenter';
import headerPresenter from '../presenters/header-presenter';
import Application from '../application';

let gameSequence;

export default class GamePresenter {

  static initialize(reset) {
    if (reset) {
      gameSequence = [...gameSequenceInitial];
      gameAnswers.length = 0;
      gameState.reset();
    }

    const question = gameSequence.shift();

    // Application.init();

    if (question) {

      if (reset) {
        headerPresenter.initialize(gameState.timeLeft, gameState.mistakesCount);
      }

      this.timeStart = headerPresenter.view.timer.value;

      if (question.typeArtist) {
        history.pushState(null, null, `#game?${gameState.currentLevel}${gameState.notesLeft}${gameState.timeLeft}`);
        artistPresenter.initialize(question);
      } else {
        history.pushState(null, null, `#game?${gameState.currentLevel}${gameState.notesLeft}${gameState.timeLeft}`);
        genrePresenter.initialize(question);
      }

    } else {
      Application.showResult();
    }
  }

  static onAnswerSubmit(view, isRight) {
    const timeEnd = headerPresenter.view.timer.value;

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
        headerPresenter.view.showMistakes();
      }

      this.initialize();
    }
  }
}
