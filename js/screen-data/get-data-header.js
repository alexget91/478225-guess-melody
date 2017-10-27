import getFormattedTime from '../data/get-formatted-time.js';
import getMinutes from '../data/get-minutes.js';

export default (data) => {
  const headerTime = getMinutes(data.time);

  return {
    timer: {
      min: getFormattedTime(headerTime.min),
      sec: getFormattedTime(headerTime.sec)
    },
    mistakes: data.mistakes
  };
};
