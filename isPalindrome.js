/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  clearedString = s.replace(/\W/g, '').toLowerCase();
  const right = clearedString
    .slice(Math.floor(clearedString.length / 2, 0))
    .split('')
    .reverse()
    .join('');
  const left = clearedString.slice(0, (clearedString.length / 2).toFixed());
  return left == right;
};
