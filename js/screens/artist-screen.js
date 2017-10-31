import ArtistView from '../views/artist-view';
import headerPresenter from '../screens/header-presenter';
import getDataArtist from '../screen-data/get-data-artist';
import GameScreen from '../screens/game-screen';

class ArtistScreen {
  constructor() {
    this.view = new ArtistView();
  }

  initialize(data) {
    const timeStart = headerPresenter.view.timer.value;

    if (typeof data !== `undefined`) {
      this.view.data = getDataArtist(data);
    }

    this.view.onAnswerClick = (evt) => {
      const timeEnd = headerPresenter.view.timer.value;

      this.view.unbind();

      const answerLabel = evt.target.classList.contains(`main-answer-preview`) ? evt.target.parentElement : evt.target;
      const isRight = Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);

      this.view.audio.pause();
      GameScreen.checkAnswer(isRight, timeStart - timeEnd);
    };

    this.view.onPlayerClick = (evt) => {
      if (evt.target.classList.contains(`player-control--pause`)) {
        evt.target.classList.remove(`player-control--pause`);
        this.view.audio.pause();
      } else {
        evt.target.classList.add(`player-control--pause`);
        this.view.audio.play();
      }
    };
  }
}

export default new ArtistScreen();
