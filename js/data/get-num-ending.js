export default (value, mode) => {
  const valueStr = value.toString();
  const valueLength = valueStr.length;
  let variants;

  switch (mode) {
    case `sec`:
      variants = {
        endOne: `секунду`,
        endSome: `секунды`,
        endMany: `секунд`,
      };
      break;
    case `times`:
      variants = {
        endOne: `раз`,
        endSome: `раза`,
        endMany: `раз`,
      };
      break;
    case `points`:
      variants = {
        endOne: `балл`,
        endSome: `балла`,
        endMany: `баллов`,
      };
      break;
    case `fastPoints`:
      variants = {
        endOne: `быстрый`,
        endSome: `быстрых`,
        endMany: `быстрых`,
      };
      break;
    case `mistakes`:
      variants = {
        endOne: `ошибку`,
        endSome: `ошибки`,
        endMany: `ошибок`,
      };
      break;
    default:
      variants = {
        endOne: `минуту`,
        endSome: `минуты`,
        endMany: `минут`,
      };
      break;
  }

  if (valueLength === 1 || valueStr[valueLength - 2] !== `1`) {
    switch (valueStr[valueLength - 1]) {
      case `1`:
        return variants.endOne;
      case `2`:
      case `3`:
      case `4`:
        return variants.endSome;
    }
  }

  return variants.endMany;
};
