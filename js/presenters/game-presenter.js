import gameData, {gameSequence, gameAnswers, gameState, QuestionType} from '../data/game-data';
import artistPresenter from '../presenters/artist-presenter';
import genrePresenter from '../presenters/genre-presenter';
import headerPresenter from '../presenters/header-presenter';
import getDataResult from '../screen-data/get-data-result';
import Application from '../application';
import ConvertData from '../data/convert-data';

export default class GamePresenter {

  static initialize(data) {
    data = ConvertData.decode(data);

    if (data) {
      [gameState.currentLevelNumber, gameState.notesLeft, gameState.timeLeft] = data;
    } else {
      gameAnswers.length = 0;
      gameState.reset();
    }

    if (gameState.currentLevelNumber < gameSequence.length) {
      const question = gameSequence[gameState.currentLevelNumber++];

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

    if (gameState.notesLeft) {
      if (!isRight) {
        headerPresenter.view.showMistakes();
      }
      Application.showGameScreen([gameState.currentLevelNumber, gameState.notesLeft, gameState.timeLeft]);

    } else {
      Application.showResult([gameData.ExitCode.NOTES_OVER]);
    }
  }
}
