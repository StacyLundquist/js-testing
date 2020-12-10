const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act & Assert
    expect(isPangram(text)).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act

    // Assert
    expect(isPangram(text)).toBeTruthy();

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'Farmer Jack realized that big yellow quilts were epensive';

    // Act

    // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('empty sentence', () => {
    // Arrange
    const text = ''
    // Act

    // Assert
    expect(isPangram(text)).toBeFalsy();

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'my_girl_wove_six_dozen_plaid_jackets_before_she_quit';

    // Act

    // Assert
    expect(isPangram(text)).toBeTruthy();

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'brown_jars_prevented_the_mixture_from_freezing_2_quickly';

    // Act

    // Assert
    expect(isPangram(text)).toBeTruthy();

  });

  // Write your own test case
});
