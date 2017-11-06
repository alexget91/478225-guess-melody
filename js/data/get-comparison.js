// Подсчитывает статистику игры
export default (statistics, result) => {
  statistics.sort((left, right) => right.score - left.score);

  const playersCount = statistics.length;
  const place = statistics.findIndex((it) => it.id === result.id) + 1;
  const percent = Math.floor((playersCount - place) / playersCount * 100);

  return {place, playersCount, percent};
};
