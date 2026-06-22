const palindromes = function (letters) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleanedLetters = letters
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reverseLetters = cleanedLetters.split('').reverse().join('');

    return cleanedLetters === reverseLetters;
};

// Do not edit below this line
module.exports = palindromes;
