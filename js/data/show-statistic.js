class MessageVariable {
  constructor(value, ending, endingVariants) {
    this.value = value.toString();
    this.ending = ending;
    this.endingVariants = endingVariants;
  }

  setEnding(variant) {
    if (typeof this.endingVariants[variant] !== `undefined`) {
      this.ending = this.endingVariants[variant];
    }
  }
}

const showStatistic = (min, sec, points, fastPoints, mistakes) => {
  const messageVars = {
    min: new MessageVariable(min, ``, {e1: `у`, e2to4: `ы`}),
    sec: new MessageVariable(sec, ``, {e1: `у`, e2to4: `ы`}),
    points: new MessageVariable(points, `ов`, {e1: ``, e2to4: `а`}),
    fastPoints: new MessageVariable(fastPoints, `х`, {e1: `й`}),
    mistakes: new MessageVariable(mistakes, `ок`, {e1: `ку`, e2to4: `ки`}),
  };

  for (let prop in messageVars) {
    if (messageVars.hasOwnProperty(prop)) {
      const value = messageVars[prop].value;
      const valueLength = value.length;

      if (valueLength === 1 || value[valueLength - 2] !== `1`) {
        switch (value[valueLength - 1]) {
          case `1`:
            messageVars[prop].setEnding(`e1`);
            break;
          case `2`:
          case `3`:
          case `4`:
            messageVars[prop].setEnding(`e2to4`);
            break;
        }
      }
    }
  }

  return `За ${min} минут${messageVars.min.ending} и ${sec} секунд${messageVars.sec.ending} вы набрали ${points} балл${messageVars.points.ending} \
(${fastPoints} быстры${messageVars.fastPoints.ending}) совершив ${mistakes} ошиб${messageVars.mistakes.ending}`;

};

export default showStatistic;
