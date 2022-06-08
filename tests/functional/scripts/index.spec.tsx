import { getFullPath } from 'scripts';

describe('scripts', () => {
  test('getFullPath', () => {
    expect(getFullPath('index.spec.tsx')).toMatch('index.spec.tsx');
  });
});
