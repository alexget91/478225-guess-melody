export default (value) => {
  return value.toString().length < 2 ? `0${value}` : `${value}`;
};
