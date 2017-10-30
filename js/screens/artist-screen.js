import checkAnswer from '../control/check-answer.js';
import ArtistView from '../views/artist-view.js';

class ArtistScreen {
  constructor() {
    this.view = new ArtistView();
  }

  initialize() {
    this.view.onAnswerClick = (evt) => {
      this.view.unbind();

      const answerLabel = evt.target.classList.contains(`main-answer-preview`) ? evt.target.parentElement : evt.target;
      const isRight = Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);

      this.view.audio.pause();
      checkAnswer(isRight, 30);
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
