// import showNextQuestion from '../control/show-next-question.js';
import WelcomeView from './welcome-view.js';
import dataWelcome from '../screen-data/data-welcome.js';

const welcome = new WelcomeView(dataWelcome);

welcome.onPlayClick = () => {
  console.log(654);
  welcome.unbind();
  // showNextQuestion(false, true);
};

export default welcome;
