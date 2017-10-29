import HeaderView from '../views/header-view.js';
import getDataHeader from '../screen-data/get-data-header.js';
import {gameState} from '../data/game-data.js';

const header = new HeaderView(getDataHeader(gameState.timeLeft, gameState.mistakesCount));

export default header;
