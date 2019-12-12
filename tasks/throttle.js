function throttle(cb, time) {
  let lastCallTime = 0;
  return function(...args) {
    let previousCallTime = lastCallTime;
    lastCallTime = Date.now();
    const delta = lastCallTime - previousCallTime;

    if (delta > time) {
      cb(...args);
    } else {
      lastCallTime = previousCallTime;
    }
  };
}

const rec = throttle(() => console.log("trigger"), 5000);

rec();
rec();
rec();

setTimeout(rec, 2000);
setTimeout(rec, 3000);
setTimeout(rec, 6000);
setTimeout(rec, 9000);
