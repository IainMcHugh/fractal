import jest from '@jest/globals';

import { getFullPath } from 'scripts';

describe('scripts', () => {
  test('getFullPath', () => {
    jest.expect(getFullPath('index.spec.tsx')).toBe('index.spec.tsx');
  });
});
