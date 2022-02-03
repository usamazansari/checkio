import { foo } from './jitu-nodejs.puzzle';

describe('Jitu ka problem', () => {
  it('should run', () => {
    expect(foo({
      a: 'a',
      b: 'b',
      c: 'c',
      custom: {
        customFieldsRaw: [
          { key: 'url', value: 'www.google.com' }
        ]
      }
    })).toBe(0);
  });
});
