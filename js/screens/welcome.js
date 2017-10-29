import showNextQuestion from '../control/show-next-question.js';
import WelcomeView from '../views/welcome-view.js';
import dataWelcome from '../screen-data/data-welcome.js';

const welcome = new WelcomeView(dataWelcome);

welcome.onPlayClick = () => {
  showNextQuestion(true);
};

export default welcome;
