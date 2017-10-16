const getTimer = (time) => {
  return time > 0 ? {
    value: time,
    tick() {
      return getTimer(this.value - 1);
    }
  } : false;
};

export default getTimer;
