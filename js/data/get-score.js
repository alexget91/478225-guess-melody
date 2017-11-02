import gameData from './game-data';

// Подсчитывает количество очков и количество быстрых ответов пользователя
export default (answers) => {
  let score = 0;
  let fastCount = 0;

  answers.forEach((el) => {
    if (el.isRight) {
      if (el.time < gameData.FAST_ANSWER_TIME) {
        score += gameData.AnswerPrice.FAST;
        fastCount++;
      } else {
        score += gameData.AnswerPrice.CORRECT;
      }
    } else {
      score += gameData.AnswerPrice.WRONG;
    }
  });

  return {score, fastCount};
};
