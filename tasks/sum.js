/* 
    sum(1)(2) == 3; // 1 + 2
    sum(1)(2)(3) == 6; // 1 + 2 + 3
    sum(5)(-1)(2) == 6
    sum(6)(-1)(-2)(-3) == 0
    sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(a) {
  let acc = a;

  function f(b) {
    acc += b;
    return f;
  }

  f[Symbol.toPrimitive] = function() {
    return acc;
  };

  return f;
}

console.log(+sum(1)(2)(5)(6));
console.log("" + sum(1)(2)(5)(6));
