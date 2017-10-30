import {gameState} from '../data/game-data.js';

export default () => {
  let mistakes = ``;

  for (let i = 0; i < gameState.mistakesCount; i++) {
    mistakes += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;
  }

  return mistakes;
};
