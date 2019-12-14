function findIndex(N, v) {
  for (let i = 0; i < N.length; ++i) {
    if (v === N[i]) {
      return i;
    }
  }
}

console.log(findIndex([1, 2, 3, 4], 3));
