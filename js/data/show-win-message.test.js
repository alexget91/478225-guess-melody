import assert from 'assert';
import showWinMessage from './show-win-message.js';

describe(`Show Win Message`, () => {
  it(`should return correct message`, () => {
    assert.equal(`Вы заняли 2-е место из 10 игроков. Это лучше чем у 80% игроков`, showWinMessage(2, 10, 80));
  });
});
