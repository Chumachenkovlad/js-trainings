function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const position = Math.floor(array.length / 2);
  const left = array.slice(0, position);
  const right = array.slice(position);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r) {
  let res = [];
  let li = 0;
  let ri = 0;

  while (li < l.length && ri < r.length) {
    const lcur = l[li];
    const rcur = r[ri];
    if (lcur < rcur) {
      res.push(lcur);
      li++;
    } else {
      res.push(rcur);
      ri++;
    }
  }

  return [...res, ...l.slice(li), ...r.slice(ri)];
}

console.log(mergeSort([1, 0, 5, 10, 11, 999, 4, 2]));
