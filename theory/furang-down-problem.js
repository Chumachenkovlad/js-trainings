let x = 10;

function foo() {
  return x;
}

function bar(funArg) {
  let x = 20;
  return funArg();
}

console.log(bar(foo)); // 10
