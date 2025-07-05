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

  test('throws exception for negative numbers with the negative values listed', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.Add("1,-2")).toThrow("negatives not allowed: -2");
    expect(() => calculator.Add("1,-2,-5")).toThrow("negatives not allowed: -2, -5");
  });
  
  test('ignores numbers greater than 1000', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("2,1001")).toBe(2);
    expect(calculator.Add("1000,2")).toBe(1002);
    expect(calculator.Add("1001,1002")).toBe(0);
  });

  test('supports delimiters of any length using //[delimiter]\\n format', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("//[***]\n1***2***3")).toBe(6);
  });

  test('supports multiple custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("//[*][%]\n1*2%3")).toBe(6);
    expect(calculator.Add("//[**][%%]\n1**2%%3")).toBe(6);
  });
  
  test('tracks how many times Add has been called', () => {
    const calculator = new StringCalculator();
    calculator.Add("1,2");
    calculator.Add("3,4");
    expect(calculator.GetCalledCount()).toBe(2);
  });
  