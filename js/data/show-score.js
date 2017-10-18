import {messages} from './constants.js';
import showWinMessage from './show-win-message.js';

const compareResult = (left, right) => right.score - left.score;

const showScore = (statistics, result) => {
  if (!result.timeLeft) {
    return messages.TIME_OVER;
  }
  if (!result.notesLeft) {
    return messages.NOTES_OVER;
  }
  statistics.push(result);
  statistics.sort(compareResult);
  const totalGamesCount = statistics.length;
  const position = statistics.indexOf(result) + 1;
  return showWinMessage(position, totalGamesCount, Math.floor((totalGamesCount - position) / totalGamesCount * 100));
};

export default showScore;
