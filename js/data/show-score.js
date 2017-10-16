import {messages} from './constants.js';
import showWinMessage from './show-win-message.js';

const compareResult = (left, right) => {
  if (left.score < right.score) {
    return 1;
  }
  if (left.score > right.score) {
    return -1;
  }
  return 0;
};

const showScore = (statistics, result) => {
  if (!result.timeLeft) {
    return messages.TIME_OVER;
  }
  if (!result.notesLeft) {
    return messages.NOTES_OVER;
  }
  statistics.push(result);
  statistics.sort(compareResult);
  const length = statistics.length;
  const position = statistics.indexOf(result) + 1;
  return showWinMessage(position, length, Math.floor((length - position) / length * 100));
};

export default showScore;
