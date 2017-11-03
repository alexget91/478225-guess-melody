import {gameSequence, gameAnswers, gameState, QuestionType} from '../data/game-data';
import artistPresenter from '../presenters/artist-presenter';
import genrePresenter from '../presenters/genre-presenter';
import headerPresenter from '../presenters/header-presenter';
import getDataResult from '../screen-data/get-data-result';
import Application from '../application';

export default class GamePresenter {

  static initialize(data) {
    data = this.dataDecode(data);

    if (!data) {
      gameAnswers.length = 0;
      gameState.reset();
      history.pushState(null, null, `#game`);
    } else {
      gameState.currentLevel = data.currentLevel;
      gameState.notesLeft = data.notesLeft;
      gameState.timeLeft = data.timeLeft;
    }

    if (gameState.currentLevel < gameSequence.length) {
      const question = gameSequence[gameState.currentLevel++];

      if (!data || !headerPresenter.view) {
        headerPresenter.initialize(gameState.timeLeft, gameState.mistakesCount);
        if (gameState.mistakesCount) {
          headerPresenter.view.showMistakes();
        }
      }

      this.timeStart = headerPresenter.view.timer.value;
      if (question.questionType === QuestionType.ARTIST) {
        artistPresenter.initialize(question);
      } else {
        genrePresenter.initialize(question);
      }

    } else {
      Application.showResult(getDataResult());
    }
  }

  static dataDecode(data) {
    return data ? {
      currentLevel: parseInt(data.substr(0, 2), 10),
      notesLeft: parseInt(data.substr(2, 2), 10),
      timeLeft: parseInt(data.substr(4), 10)
    } : false;
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
      gameState.notesLeft--;
    }

    if (!gameState.notesLeft) {

      Application.showResult(getDataResult());

    } else {

      if (!isRight) {
        headerPresenter.view.showMistakes();
      }

      Application.showGameScreen([gameState.currentLevel, gameState.notesLeft, gameState.timeLeft]);
    }
  }
}
