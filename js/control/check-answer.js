import {gameAnswers} from '../data/game-data.js';
import showNextQuestion from './show-next-question.js';
import showGameEnd from './show-game-end.js';
import showMistake from '../view/show-mistake.js';

export default (gameState, isRight, time) => {
  gameAnswers.push({isRight, time});

  if (!isRight) {
    gameState.notesLeft -= 1;
  }

  if (!gameState.notesLeft) {

    showGameEnd(gameState);

  } else {

    if (!isRight) {
      showMistake(gameState);
    }

    showNextQuestion(gameState);
  }
};
