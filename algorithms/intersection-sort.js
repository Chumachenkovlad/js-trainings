function intersectionSort(numbers) {
  for (let j = 2; j < numbers.length; j++) {
    let key = numbers[j];

    let i = j - 1;

    while (i > 0 && numbers[i] > key) {
      numbers[i + 1] = numbers[i];
      i = i - 1;
    }

    numbers[i + 1] = key;
  }

  return numbers;
}

console.log(intersectionSort([1, 3, 2, 6, 3, 8, 7]));
