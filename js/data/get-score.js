import gameData from './game-data';

// Подсчитывает количество очков и количество быстрых ответов пользователя
export default (answers) => {
  let fastCount = 0;

  const score = answers.reduce((result, el) => {
    if (el.isRight) {
      if (el.time < gameData.FAST_ANSWER_TIME) {
        fastCount++;
        return result + gameData.AnswerPrice.FAST;
      } else {
        return result + gameData.AnswerPrice.CORRECT;
      }
    }
    return result + gameData.AnswerPrice.WRONG;
  }, 0);

  return {score, fastCount};
};
