import { someUtil } from 'utils';

describe('utils', () => {
  test('someUtil', () => {
    expect(someUtil('something')).toBe('Hello something');
  });
});
