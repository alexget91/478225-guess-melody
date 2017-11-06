import {gameMusic} from './game-data';
import Application from '../application';

const preloadAudio = (links) => {
  const linksSize = links.size;
  let audioPreloadCount = 0;
  const linksValues = links.values();

  const loadAudioLink = () => {
    const linkNext = linksValues.next();

    if (!linkNext.done) {
      const audio = new Audio(linkNext.value);
      audio.preload = `none`;

      audio.play()
          .then(() => {
            audio.pause();
            links.delete(linkNext.value);

            audioPreloadCount++;
            console.log(`Загружено ${audioPreloadCount} из ${linksSize}`);
            gameMusic[linkNext.value] = audio;

            loadAudioLink();
          })
          .catch((error) => {
            throw new Error(error);
          });
    } else {
      Application.showWelcome();
    }
  };

  loadAudioLink();
};

export default preloadAudio;
