const calculator = require('./calculator.js');
const cal = new calculator();

describe('calculator', () => {
  test('add', () => {
    expect(cal.add(6, 2)).toBe(8);
  });

  test('sub', () => {
    expect(cal.subtract(6, 2)).toBe(4);
  });

  test('div', () => {
    expect(cal.divide(6, 2)).toBe(3);
  });

  test('mul', () => {
    expect(cal.multiply(6, 2)).toBe(12);
  });
});