import gameData, {gameAnswers, gameState, gameResult} from '../data/game-data';
import getScore from '../data/get-score';
import getMinutes from '../data/get-minutes';

export default () => {
  const gameScore = getScore(gameAnswers);
  let dataResult;


  gameResult.score = gameScore.score;
  gameResult.notesLeft = gameState.notesLeft;
  gameResult.timeLeft = gameState.timeLeft;
  gameResult.id = new Date().getTime();

  const gameTime = getMinutes(gameData.GAME_TIME - gameResult.timeLeft);

  dataResult = {
    min: gameTime.min,
    sec: gameTime.sec,
    score: gameScore.score,
    fastCount: gameScore.fastCount,
    mistakes: gameState.mistakesCount,
  };

  return dataResult;
};
