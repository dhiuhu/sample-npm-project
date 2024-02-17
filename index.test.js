const { addNumbers } = require('./index');

// Test case for the addNumbers function
test('adds 2 + 3 to equal 5', () => {
  expect(addNumbers(2, 3)).toBe(5);
});

// Test case for the addNumbers function with negative numbers
test('adds -1 + 1 to equal 0', () => {
  expect(addNumbers(-1, 1)).toBe(0);
});

// Test case for the addNumbers function with decimal numbers
test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
});