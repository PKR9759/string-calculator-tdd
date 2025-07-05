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

  test('returns sum of unknown amount of numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1,2,3,4")).toBe(10);
    expect(calculator.Add("5,5,5,5,5")).toBe(25);
  });
  
  test('supports newlines as delimiters along with commas', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1\n2,3")).toBe(6);
  });

  test('supports custom single-character delimiter', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("//;\n1;2")).toBe(3);
  });
  