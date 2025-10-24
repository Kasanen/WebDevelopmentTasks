const numbers = ['21', '10', '8'];

function sortArray(array) {
  array.sort((a, b) => a - b);
  return array;
}

console.log(numbers);
console.log(sortArray(numbers));
