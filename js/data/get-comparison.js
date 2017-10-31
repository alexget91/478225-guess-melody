import gameData from './game-data';

// Подсчитывает статистику игры
export default (statistics, result) => {
  if (!result.timeLeft) {
    return gameData.ExitCode.TIME_OVER;
  }
  if (!result.notesLeft) {
    return gameData.ExitCode.NOTES_OVER;
  }
  statistics.push(result);
  statistics.sort((left, right) => right.score - left.score);

  const playersCount = statistics.length;
  const place = statistics.indexOf(result) + 1;
  const percent = Math.floor((playersCount - place) / playersCount * 100);

  return {place, playersCount, percent};
};
