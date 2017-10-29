import {gameAnswers, gameState} from '../data/game-data.js';
import showNextQuestion from './show-next-question.js';
import showGameEnd from './show-game-end.js';
import showMistake from '../dom-helpers/show-mistake.js';

export default (isRight, time) => {
  gameAnswers.push({isRight, time});

  if (!isRight) {
    gameState.notesLeft -= 1;
  }

  if (!gameState.notesLeft) {

    showGameEnd();

  } else {

    if (!isRight) {
      showMistake();
    }

    showNextQuestion();
  }
};
