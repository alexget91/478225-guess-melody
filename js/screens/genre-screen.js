import {gameState} from '../data/game-data';
import GenreView from '../views/genre-view';
import getDataGenre from '../screen-data/get-data-genre';
import GameScreen from '../screens/game-screen';

class GenreScreen {
  initialize(data) {
    gameState.currentLevelIsGenre = true;

    if (typeof data !== `undefined`) {
      this.view = new GenreView(getDataGenre(data));
    }

    const view = this.view;
    let isRight = false;

    view.onPlayerClick = (evt) => {
      evt.preventDefault();
      view.audioToggle(evt);
    };

    view.onSubmitClick = (evt) => {
      evt.preventDefault();

      GameScreen.onAnswerSubmit(this.view, isRight);
    };

    view.onAnswerChange = (evt) => {
      const answerCheckbox = evt.target;
      const answerID = view.getAnswerID(answerCheckbox);
      const userAnswer = view.userAnswer;

      if (answerCheckbox.checked) {
        userAnswer[answerID] = answerCheckbox.dataset.right;
      } else {
        delete userAnswer[answerID];
      }

      const userAnswerValues = Object.values(userAnswer);
      const userAnswerLength = userAnswerValues.length;

      isRight = userAnswerLength === view.rightAnswerLength && userAnswerValues.reduce((result, it) => result && Boolean(it), true);

      view.submitToggle(!userAnswerLength);
    };

    view.show();
  }
}

export default new GenreScreen();
