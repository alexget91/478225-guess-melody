import {gameAnswers, initialState} from '../data/game-data.js';
import getNumEnding from '../data/get-num-ending.js';
import getScore from '../data/get-score.js';
import getMinutes from '../data/get-minutes.js';

export default (gameResult, comparison) => {
  const gameScore = getScore(gameAnswers);
  const gameTimeLeft = getMinutes(gameResult.timeLeft);
  const mistakes = initialState.notesLeft - gameResult.notesLeft;

  return {
    title: `Вы настоящий меломан!`,
    statistics: `За&nbsp;${gameTimeLeft.min}&nbsp;${getNumEnding(gameTimeLeft.min)} и\
      ${gameTimeLeft.sec}&nbsp;${getNumEnding(gameTimeLeft.sec, `sec`)}
      <br>вы&nbsp;набрали ${gameScore.score} ${getNumEnding(gameScore.score, `points`)}\
      (${gameScore.fastCount} ${getNumEnding(gameScore.fastCount, `fastPoints`)})
      <br>совершив ${mistakes} ${getNumEnding(mistakes, `mistakes`)}`,
    comparison: `Вы заняли ${comparison.place}-е место из ${comparison.playersCount} игроков.\
      Это&nbsp;лучше чем у&nbsp;${comparison.percent}%&nbsp;игроков`,
    replay: `Сыграть ещё раз`
  };
};
