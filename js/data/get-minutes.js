export default (time) => {
  return {
    min: Math.floor(time / 60),
    sec: time % 60
  };
};
