import gameData, {gameStatistics, gameAnswers, gameState} from '../data/game-data';
import getComparison from '../data/get-comparison';
import getScore from '../data/get-score';
import getMinutes from '../data/get-minutes';

export default () => {
  const gameScore = getScore(gameAnswers);
  const gameResult = {
    score: gameScore.score,
    notesLeft: gameState.notesLeft,
    timeLeft: gameState.timeLeft
  };
  const comparison = getComparison(gameStatistics, gameResult);
  let dataResult;

  if (Object.values(gameData.ExitCode).indexOf(comparison) !== -1) {
    dataResult = [comparison];
  } else {
    const gameTime = getMinutes(gameData.GAME_TIME - gameResult.timeLeft);

    dataResult = {
      min: gameTime.min,
      sec: gameTime.sec,
      score: gameScore.score,
      fastCount: gameScore.fastCount,
      mistakes: gameState.mistakesCount,
      place: comparison.place,
      playersCount: comparison.playersCount,
      percent: comparison.percent
    };
  }

  return dataResult;
};
