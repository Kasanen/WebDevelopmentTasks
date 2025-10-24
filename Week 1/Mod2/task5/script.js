function sortArray(array, order) {
  if (order == 'asc') {
    array.sort((a, b) => a - b);
  } else if (order == 'desc') {
    array.sort((a, b) => a + b);
  } else {
    console.log('Not an order');
  }
  return array;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
