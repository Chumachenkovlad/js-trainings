function array() {
  const data = [];

  function f(index) {
    return data[index];
  }

  f.prototype.push = function(item) {
    return data.push(item);
  };

  f.prototype.pop = function() {
    return data.pop();
  };

  f.prototype.toString = function() {
    return data.toString();
  };

  return new f();
}

const arr = array();
arr.push("hello");
arr.push("second");
console.log(arr.toString(), arr.pop(), arr.pop());
