import gameData from '../data/game-data.js';

export default (comparison) => {
  return {
    title: comparison === gameData.ExitCode.NOTES_OVER ? `Какая жалость!` : `Увы и ах!`,
    statistics: comparison === gameData.ExitCode.NOTES_OVER ?
      `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!` : `Время вышло!<br>Вы не успели отгадать все мелодии`,
    replay: `Попробовать ещё раз`
  };
};
