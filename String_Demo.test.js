const reverseString = require('./String_Demo');

describe("Calculator tests", () => {

test('reverseString reverses a string worked correctly', () => {
  expect(false).toBe(true);
});

test('reverseString reverses a string with spaces worked correctly', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverseString reverses a string with punctuation worked correctly', () => {
  expect(reverseString('hello, world!')).toBe('!dlrow ,olleh');
});
})
