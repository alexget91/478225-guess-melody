import getNumEnding from '../data/get-num-ending';

export default (data) => {
  return {
    title: `Вы настоящий меломан!`,
    statistics: `За&nbsp;${data.min}&nbsp;${getNumEnding(data.min, [`минуту`, `минуты`, `минут`])} и\
      ${data.sec}&nbsp;${getNumEnding(data.sec, [`секунду`, `секунды`, `секунд`])}
      <br>вы&nbsp;набрали ${data.score} ${getNumEnding(data.score, [`балл`, `балла`, `баллов`])}\
      (${data.fastCount} ${getNumEnding(data.fastCount, [`быстрый`, `быстрых`, `быстрых`])})
      <br>совершив ${data.mistakes} ${getNumEnding(data.mistakes, [`ошибку`, `ошибки`, `ошибок`])}`,
    comparison: `Загрузка статистики...`,
    replay: `Сыграть ещё раз`,
  };
};
