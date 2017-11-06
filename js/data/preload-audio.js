import {gameMusic} from './game-data';
import splashScreen from '../views/splash-screen';
import Application from '../application';

/**
 * Может работать нестабильно из-за проблем с хостингом и при медленной загрузке с freemusicarchive.org
 */

const preloadAudio = (links) => {
  const linksSize = links.size;
  let audioPreloadCount = 0;

  Promise.all(Array.from(links).map((it) => {
    const loadPromise = new Promise((resolve) => {
      const audio = new Audio();
      audio.addEventListener(`canplaythrough`, () => resolve(audio));
      audio.src = it;
      audio.load();
    });

    loadPromise.then((audio) => {
      audioPreloadCount++;
      splashScreen.showProgress(Math.round(audioPreloadCount / linksSize * 100));
      gameMusic[it] = audio;
    });

    return loadPromise;
  }))
      .then(() => {
        Application.showWelcome();
      })
      .catch((error) => {
        throw new Error(error);
      });
};

export default preloadAudio;
