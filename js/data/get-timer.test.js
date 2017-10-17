import assert from 'assert';
import getTimer from './get-timer.js';

describe(`Get timer`, () => {
  it(`should return correct value of time`, () => {
    assert.equal(5, getTimer(5).value);
  });

  it(`should decrease time by 1 when 'tick' method called`, () => {
    assert.equal(6, getTimer(7).tick().value);
  });

  it(`should return 'false' when 'tick' method called on stopped timer`, () => {
    assert.strictEqual(false, getTimer(0).tick());
  });
});
