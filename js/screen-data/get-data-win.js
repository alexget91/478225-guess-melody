import gameData, {gameAnswers} from '../data/game-data.js';
import getNumEnding from '../data/get-num-ending.js';
import getScore from '../data/get-score.js';
import getMinutes from '../data/get-minutes.js';

export default (gameResult, comparison) => {
  const gameScore = getScore(gameAnswers);
  const gameTime = getMinutes(gameData.GAME_TIME - gameResult.timeLeft);
  const mistakes = gameData.NOTES_COUNT - gameResult.notesLeft;

  return {
    title: `Вы настоящий меломан!`,
    statistics: `За&nbsp;${gameTime.min}&nbsp;${getNumEnding(gameTime.min, [`минуту`, `минуты`, `минут`])} и\
      ${gameTime.sec}&nbsp;${getNumEnding(gameTime.sec, [`секунду`, `секунды`, `секунд`])}
      <br>вы&nbsp;набрали ${gameScore.score} ${getNumEnding(gameScore.score, [`балл`, `балла`, `баллов`])}\
      (${gameScore.fastCount} ${getNumEnding(gameScore.fastCount, [`быстрый`, `быстрых`, `быстрых`])})
      <br>совершив ${mistakes} ${getNumEnding(mistakes, [`ошибку`, `ошибки`, `ошибок`])}`,
    comparison: `Вы заняли ${comparison.place}-е место из ${comparison.playersCount} игроков.\
      Это&nbsp;лучше чем у&nbsp;${comparison.percent}%&nbsp;игроков`,
    replay: `Сыграть ещё раз`
  };
};
