export default (timeRatio, radius) => {
  const circleLength = Math.round(2 * Math.PI * radius);
  const stroke = timeRatio * circleLength;
  const offset = circleLength - stroke;

  return {stroke, offset};
};
