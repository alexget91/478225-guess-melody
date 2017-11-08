import {gameMusic} from './game-data';
import splashScreen from '../views/splash-screen';
import Application from '../application';

/**
 * Может работать нестабильно из-за проблем с хостингом и при медленной загрузке с freemusicarchive.org
 */

const preloadAudio = async (links) => {
  const linksSize = links.size;
  let audioPreloadCount = 0;

  try {
    await Promise.all(Array.from(links).map((it) => {
      const loadPromise = new Promise((resolve) => {
        const audio = new Audio();
        audio.addEventListener(`canplaythrough`, () => resolve());
        audio.src = it;
        gameMusic[it] = audio;
        audio.load();
      });

      loadPromise.then(() => {
        audioPreloadCount++;
        splashScreen.showProgress(Math.round(audioPreloadCount / linksSize * 100));
      }).catch((error) => {
        audioPreloadCount++;
        throw new Error(error);
      });

      return loadPromise;
    }));

    Application.showWelcome();

  } catch (error) {
    throw new Error(error);
  }
};

export default preloadAudio;
