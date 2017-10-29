import gameData from '../data/game-data.js';
import getNumEnding from '../data/get-num-ending.js';
import getMinutes from '../data/get-minutes.js';

const mistakesCount = gameData.NOTES_COUNT - 1;
const gameTime = getMinutes(gameData.GAME_TIME);
let timeString = `${gameTime.min} ${getNumEnding(gameTime.min, [`минуту`, `минуты`, `минут`])}`;
if (gameTime.sec) {
  timeString += ` ${gameTime.sec} ${getNumEnding(gameTime.sec, [`секунду`, `секунды`, `секунд`])}`;
}

export default {
  startText: `Начать игру`,
  content: {
    title: `Правила игры`,
    text: `Правила просты&nbsp;— за&nbsp;${timeString} ответить на все вопросы.<br>
      Ошибиться можно ${mistakesCount} ${getNumEnding(mistakesCount, [`раз`, `раза`, `раз`])}.<br>
      Удачи!`
  }
};
