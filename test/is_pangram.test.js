const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    // Assert
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act

    // Assert

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'Farmer Jack realized that big yellow quilts were epensive';

    // Act

    // Assert

  });

  test('empty sentence', () => {
    // Arrange
    const text = ''
    // Act

    // Assert

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'my_girl_wove_six_dozen_plaid_jackets_before_she_quit';

    // Act

    // Assert

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'brown_jars_prevented_the_mixture_from_freezing_2_quickly';

    // Act

    // Assert

  });

  // Write your own test case
});
