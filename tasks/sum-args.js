function sum(...values) {
  return values.reduce((a, b) => a + b, 0);
}

function anotherSum() {
  return Array.prototype.reduce.call(arguments, (a, b) => a + b, 0);
}

console.log(anotherSum(2, 2, 2));
