import { assert } from 'chai';
import { expect } from 'chai';
import { dayTwo } from '../src/2-2';

describe(`1-4`, () => {
  const testArray = ['cart', 'jert', 'lert'];
  it('should work', () => {
    expect(dayTwo(testArray)).to.equal('ert');
  });
});