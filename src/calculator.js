class Calculator {
  add(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }

  subtract(num1, num2) {
    const abs = num1 - num2;
    return abs;
  }

  divide(num1, num2) {
    const div = num1 / num2;
    return div;
  }

  multiply(num1, num2) {
    const mul = num1 * num2;
    return mul;
  }
}

module.exports = Calculator;