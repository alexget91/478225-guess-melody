const getTimer = (time) => {
  return {
    value: time,
    tick() {
      return time > 0 ? getTimer(this.value - 1) : false;
    }
  };
};

export default getTimer;
