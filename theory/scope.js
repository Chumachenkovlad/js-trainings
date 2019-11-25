let otherCount = 5;

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    Oincrement() {
      otherCount++;
      return otherCount;
    },
    Odecrement() {
      otherCount--;
      return otherCount;
    }
  };
}

let counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
console.log(counter.increment()); // 1
console.log(counter.Oincrement()); // 6
console.log(counter.Odecrement()); // 5
console.log(counter.Oincrement()); // 6
