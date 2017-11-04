// Подсчитывает статистику игры
export default (statistics, result) => {
  statistics.sort((left, right) => right.score - left.score);

  let place;

  for (let [index, element] of statistics.entries()) {
    if (element.id === result.id) {
      place = index + 1;
      break;
    }
  }

  const playersCount = statistics.length;
  const percent = Math.floor((playersCount - place) / playersCount * 100);

  return {place, playersCount, percent};
};
