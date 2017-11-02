import getFormattedTime from '../data/get-formatted-time';
import getMinutes from '../data/get-minutes';

export default (time, mistakes) => {
  const headerTime = getMinutes(time);

  return {
    timer: {
      min: getFormattedTime(headerTime.min),
      sec: getFormattedTime(headerTime.sec)
    },
    mistakes
  };
};
