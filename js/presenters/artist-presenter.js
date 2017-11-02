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
      const answerLabel = evt.target.classList.contains(`main-answer-preview`) ? evt.target.parentElement : evt.target;
      const isRight = Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);

      GamePresenter.onAnswerSubmit(this.view, isRight);
    };

    view.onPlayerClick = (evt) => {
      view.audioToggle(true);
      view.playButtonToggle(evt);
    };

    view.show();
  }
}

export default new ArtistPresenter();
