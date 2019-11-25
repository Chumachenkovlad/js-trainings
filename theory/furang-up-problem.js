function foo() {
  let x = 10;

  function bar() {
    return x;
  }

  return bar;
}

let x = 20;

let bar = foo();

console.log(bar()); // 10
