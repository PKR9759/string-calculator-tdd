const { StringCalculator } = require('../src/StringCalculator');

test('returns 0 for empty string', () => {
  const calculator = new StringCalculator();
  expect(calculator.Add("")).toBe(0);
});

test('returns number itself for single number input', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("5")).toBe(5);
  });

  test('returns sum of two numbers separated by comma', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1,2")).toBe(3);
  });
  