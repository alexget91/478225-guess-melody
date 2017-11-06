import {gameMusic} from './game-data';
import splashScreen from '../views/splash-screen';
import Application from '../application';

/**
 * Может работать нестабильно из-за проблем с хостингом и при медленной загрузке с freemusicarchive.org
 */

const preloadAudio = (links) => {
  const linksSize = links.size;
  const linksValues = links.values();
  let audioPreloadCount = 0;
  const loadAudioLinks = [];

  const loadAudioLink = () => {
    const linkNext = linksValues.next();

    if (!linkNext.done) {
      const loadPromise = new Promise((resolve) => {
        const audio = new Audio();
        audio.addEventListener(`canplaythrough`, () => resolve(audio));
        audio.src = linkNext.value;
        audio.load();
      });

      loadPromise.then((audio) => {
        audioPreloadCount++;
        splashScreen.showProgress(Math.round(audioPreloadCount / linksSize * 100));
        gameMusic[linkNext.value] = audio;
      });

      loadAudioLinks.push(loadPromise);

      loadAudioLink();
    }
  };

  loadAudioLink();

  Promise.all(loadAudioLinks)
      .then(() => {
        Application.showWelcome();
      })
      .catch((error) => {
        throw new Error(error);
      });
};

export default preloadAudio;
