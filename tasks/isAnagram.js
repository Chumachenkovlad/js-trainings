/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const ts = t.split('');
  return (
    s.length === t.length &&
    s.split('').every(char => {
      let charIndex = ts.indexOf(char);
      if (charIndex !== -1) {
        ts[charIndex] = null;
        return true;
      }
      return false;
    })
  );
};

console.log(isAnagram('a', 'ab'));
