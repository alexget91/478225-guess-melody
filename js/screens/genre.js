import checkAnswer from '../control/check-answer.js';
import GenreView from '../views/genre-view.js';

const genre = new GenreView();
let isRight;

genre.onPlayerClick = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains(`player-control--pause`)) {
    genre.audioPause();
  } else {
    genre.audioPause();
    evt.target.classList.add(`player-control--pause`);
    genre.playingID = evt.target.parentElement.querySelector(`audio`).dataset.id;
    genre.audioPlay();
  }
};

genre.onSubmitClick = (evt) => {
  evt.preventDefault();

  genre.unbind();
  genre.audioPause();
  checkAnswer(isRight, 30);
};

genre.onAnswerChange = (evt) => {
  if (evt.target.checked) {
    genre.userAnswer[evt.target.getAttribute(`id`)] = evt.target.dataset.right;
  } else {
    delete genre.userAnswer[evt.target.getAttribute(`id`)];
  }

  isRight = Object.keys(genre.userAnswer).length === parseInt(document.querySelector(`.genre`).dataset.rightLength, 10)
            && Object.values(genre.userAnswer).reduce((result, it) => (result && Boolean(it)), true);

  genre.submitToggle(!Object.keys(genre.userAnswer).length);
};


export default genre;
