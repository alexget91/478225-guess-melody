import checkAnswer from '../control/check-answer.js';
import ArtistView from '../views/artist-view.js';

const artist = new ArtistView();

artist.onAnswerClick = (evt) => {
  artist.unbind();

  const answerLabel = evt.target.classList.contains(`main-answer-preview`) ? evt.target.parentElement : evt.target;
  const isRight = Boolean(document.querySelector(`#${answerLabel.getAttribute(`for`)}`).dataset.right);

  artist.audio.pause();
  checkAnswer(isRight, 30);
};

artist.onPlayerClick = (evt) => {
  if (evt.target.classList.contains(`player-control--pause`)) {
    evt.target.classList.remove(`player-control--pause`);
    artist.audio.pause();
  } else {
    evt.target.classList.add(`player-control--pause`);
    artist.audio.play();
  }
};


export default artist;
