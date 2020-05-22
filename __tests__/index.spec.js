const pj = require('../package.json');
const { foo } = require('../index');
describe('name', () => {
  test('returns name object', () => {
    expect(pj.name).toBe('actions-playground');
  });
});
const unusedVar = 1;
describe('foo', () => {
  test('js is fine', () => {
    expect(foo(0.1, 0.2)).toBe(0.30000000000000004);
  });
  test('failing test', () => {
    expect(foo(2, 2)).toBe(2);
  });
});
