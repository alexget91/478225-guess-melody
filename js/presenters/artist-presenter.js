import {gameState, QuestionType} from '../data/game-data';
import ArtistView from '../views/artist-view';
import GamePresenter from '../presenters/game-presenter';

class ArtistPresenter {
  initialize(data) {
    gameState.currentLevelType = QuestionType.ARTIST;

    this.view = new ArtistView(data);

    const view = this.view;

    view.onAnswerClick = (evt) => {
      GamePresenter.onAnswerSubmit(view, view.checkAnswer(evt));
    };

    view.onPlayerClick = (evt) => {
      view.audioToggle(true);
      view.playButtonToggle(evt);
    };

    view.show();
  }
}

export default new ArtistPresenter();
