const stringLength = require('./string_length.js');

test('Conditions', () => {
  const error = 'Length must be between 1 and 10';
  expect(stringLength('House')).toBe(5);
  expect(() => stringLength('HouseHouseH')).toThrow(error);
});