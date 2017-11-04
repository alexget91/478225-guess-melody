// Подсчитывает статистику игры
export default (statistics, result) => {
  statistics.sort((left, right) => right.score - left.score);

  let place;

  for (let i = 0; i < statistics.length; i++) {
    if (statistics[i].id === result.id) {
      place = i + 1;
      break;
    }
  }

  const playersCount = statistics.length;
  const percent = Math.floor((playersCount - place) / playersCount * 100);

  return {place, playersCount, percent};
};
