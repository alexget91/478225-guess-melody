import {QUESTIONS_COUNT, FAST_ANSWER_TIME, answerPrice, GAME_OVER_CODE} from './constants.js';

const getScore = (answers, notesLeft) => {
  if (answers.length === QUESTIONS_COUNT && notesLeft > 0) {
    return answers.reduce((score, el) => {
      if (el.isCorrect) {
        score += el.time < FAST_ANSWER_TIME ? answerPrice.FAST : answerPrice.CORRECT;
      } else {
        score += answerPrice.WRONG;
      }
      return score;
    }, 0);
  }
  return GAME_OVER_CODE;
};

export default getScore;
