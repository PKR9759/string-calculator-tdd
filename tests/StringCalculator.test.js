const { StringCalculator } = require('../src/StringCalculator');

test('returns 0 for empty string', () => {
  const calculator = new StringCalculator();
  expect(calculator.Add("")).toBe(0);
});
