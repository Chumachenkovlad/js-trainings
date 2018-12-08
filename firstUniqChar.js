/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const badChars = new Set();
  return s.split('').findIndex((char, index) => {
    if (!badChars.has(char) && s.match(new RegExp(char, 'g')).length === 1) {
      return true;
    }

    badChars.add(char);
    return false;
  });
};

console.log(firstUniqChar('aabbccddggaahh'));
