import checkAnswer from '../control/check-answer.js';
import GenreView from '../views/genre-view.js';
import headerPresenter from '../screens/header-presenter.js';
import getDataGenre from '../screen-data/get-data-genre.js';

class GenreScreen {
  constructor() {
    this.view = new GenreView();
    this.isRight = false;
  }

  initialize(data) {
    const timeStart = headerPresenter.view.timer.value;

    if (typeof data !== `undefined`) {
      this.view.data = getDataGenre(data);
    }

    this.view.onPlayerClick = (evt) => {
      evt.preventDefault();

      if (evt.target.classList.contains(`player-control--pause`)) {
        this.view.audioPause();
      } else {
        this.view.audioPause();
        evt.target.classList.add(`player-control--pause`);
        this.view.playingID = evt.target.parentElement.querySelector(`audio`).dataset.id;
        this.view.audioPlay();
      }
    };

    this.view.onSubmitClick = (evt) => {
      evt.preventDefault();

      const timeEnd = headerPresenter.view.timer.value;

      this.view.unbind();
      this.view.audioPause();
      checkAnswer(this.isRight, timeStart - timeEnd);
    };

    this.view.onAnswerChange = (evt) => {
      if (evt.target.checked) {
        this.view.userAnswer[evt.target.getAttribute(`id`)] = evt.target.dataset.right;
      } else {
        delete this.view.userAnswer[evt.target.getAttribute(`id`)];
      }

      this.isRight = Object.keys(this.view.userAnswer).length === parseInt(document.querySelector(`.genre`).dataset.rightLength, 10)
                && Object.values(this.view.userAnswer).reduce((result, it) => (result && Boolean(it)), true);

      this.view.submitToggle(!Object.keys(this.view.userAnswer).length);
    };
  }
}

export default new GenreScreen();
