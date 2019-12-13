Number.prototype.plus = function(v) {
  return this + v;
};

Number.prototype.minus = function(v) {
  return this - v;
};

console.log((5).plus(3).minus(4));
