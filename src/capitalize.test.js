const capitalize = require('./capitalize.js');

test('capitalize', () => {
  const string = 'test';
  expect(typeof capitalize(string)).toBe('string');
  expect(capitalize(string)).toBe('Test');
});