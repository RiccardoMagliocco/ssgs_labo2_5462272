const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
  it('inverte una stringa normale', () => {
    expect(reverseString('ciao')).toBe('oaic');
  });
  it('gestisce stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });
  it('gestisce caratteri speciali', () => {
    expect(reverseString('a!b@c')).toBe('c@b!a');
  });
});

describe('isPalindrome', () => {
  it('riconosce un palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });
  it('ignora maiuscole e spazi', () => {
    expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
  });
  it('riconosce una stringa non palindroma', () => {
    expect(isPalindrome('ciao')).toBe(false);
  });
  it('gestisce stringa vuota', () => {
    expect(isPalindrome('')).toBe(true);
  });
});

describe('truncateString', () => {
  it('non tronca se lunghezza sufficiente', () => {
    expect(truncateString('abc', 5)).toBe('abc');
  });
  it('gestisce stringa vuota', () => {
    expect(truncateString('', 2)).toBe('');
  });
  it('tronca correttamente', () => {
    expect(truncateString('abcdef', 3)).toBe('abc...');
  });
});

describe('countCharacters', () => {
  it('conta i caratteri correttamente', () => {
    expect(countCharacters('aab')).toEqual({ a: 2, b: 1 });
  });
  it('gestisce stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });
  it('gestisce caratteri speciali e spazi', () => {
    expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
  });
});