const pj = require('../package.json');

describe('stats', () => {
  test('returns stats object', () => {
    expect(pj.name).toBe('actions-playground');
  });
});
