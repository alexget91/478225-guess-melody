export default (value) => {
  return value >= 0 && value < 10 ? `0${value}` : `${value}`;
};
