import {gameState} from '../data/game-data';
import ArtistView from '../views/artist-view';
import getDataArtist from '../screen-data/get-data-artist';
import GamePresenter from '../presenters/game-presenter';

class ArtistPresenter {
  initialize(data) {
    gameState.currentLevelIsGenre = false;

    this.view = new ArtistView(getDataArtist(data));

    const view = this.view;

    view.onAnswerClick = (evt) => {
      GamePresenter.onAnswerSubmit(view, view.checkAnswer(evt.target));
    };

    view.onPlayerClick = (evt) => {
      view.audioToggle(true);
      view.playButtonToggle(evt);
    };

    view.show();
  }
}

export default new ArtistPresenter();
