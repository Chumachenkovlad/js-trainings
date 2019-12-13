/* 

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
#Example:

your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?


*/

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const SPLITER = "";

function playPass(s, n) {
  const result = s.toLowerCase();
  return result
    .split(SPLITER)
    .map(transformChar(n))
    .map(transformCase)
    .reverse()
    .join(SPLITER);
}

function shiftCharOn(letter, shift) {
  const index = alphabet.indexOf(letter);
  return alphabet[index + shift];
}

function shiftDigit(digit) {
  return Math.abs(+digit - 9);
}

function transformChar(shift) {
  return function(char) {
    if (char.match(/[a-z]/)) {
      return shiftCharOn(char, shift);
    }

    if (char.match(/[0-9]/)) {
      return shiftDigit(char);
    }

    return char;
  };
}

function transformCase(char, index) {
  return index % 2 === 0 ? char.toString().toUpperCase() : char;
}

console.log(playPass("BORN IN 2015!", 1));
console.log(playPass("BORN IN 2015!", 1) === "!4897 Oj oSpC");
console.log(0 % 2);
