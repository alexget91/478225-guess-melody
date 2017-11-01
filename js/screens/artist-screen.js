import {gameState} from '../data/game-data';
import ArtistView from '../views/artist-view';
import getDataArtist from '../screen-data/get-data-artist';
import GameScreen from '../screens/game-screen';

class ArtistScreen {
  initialize(data) {
    gameState.currentLevelIsGenre = false;

    if (typeof data !== `undefined`) {
      this.view = new ArtistView(getDataArtist(data));
    }

    const view = this.view;

    view.onAnswerClick = (evt) => {
      const answerLabel = evt.target.classList.contains(`main-answer-preview`) ? evt.target.parentElement : evt.target;
      const isRight = Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);

      GameScreen.onAnswerSubmit(this.view, isRight);
    };

    view.onPlayerClick = (evt) => {
      view.audioToggle(true);
      view.playButtonToggle(evt);
    };

    view.show();
  }
}

export default new ArtistScreen();
