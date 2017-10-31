import welcomeScreen from './screens/welcome-screen.js';
import showScreen from './dom-helpers/show-screen.js';

welcomeScreen.initialize();
showScreen(welcomeScreen.view.element);
