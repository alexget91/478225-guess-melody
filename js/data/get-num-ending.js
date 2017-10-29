export default (num, forms) => {
  let pluralType = 2;

  if (num % 10 === 1 && num % 100 !== 11) {
    pluralType = 0;
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    pluralType = 1;
  }

  return typeof forms[pluralType] === `undefined` ? `` : forms[pluralType];
};
