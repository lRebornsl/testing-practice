const reverseString = require('./reverse_string.js')

test('reverse', () => {
  expect(reverseString('Hola')).toBe('aloH');
  expect(reverseString('Perfect')).toBe('tcefreP');
});