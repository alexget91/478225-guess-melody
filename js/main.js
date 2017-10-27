import showScreen from './view/show-screen.js';
import welcomeScreenTemplate, {welcomeScreenInit} from './screen-templates/welcome.js';
import dataWelcome from './screen-data/data-welcome.js';

showScreen(welcomeScreenTemplate(dataWelcome), welcomeScreenInit);
