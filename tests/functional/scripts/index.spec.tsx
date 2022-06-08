import { getFullPath } from 'scripts';

describe('scripts', () => {
  test('getFullPath', () => {
    expect(getFullPath('index.spec.tsx')).toBe(
      '/Users/iainmchugh/Documents/iain/web_design/nextjs-template/scripts/index.spec.tsx'
    );
  });
});
