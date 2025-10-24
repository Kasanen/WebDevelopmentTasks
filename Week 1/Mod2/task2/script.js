const numbers = [];

for (let i = 1; i < 6; i++) {
  const numb = parseFloat(prompt('Enter Number ' + i + ': '));
  numbers.push(numb);
}

console.log('Numbers: ' + numbers);

const reqNumb = parseFloat(prompt('Enter a Number to Search: '));
if (numbers.includes(reqNumb)) {
  console.log('Number ' + reqNumb + ' is found in the array.');
} else {
  console.log('Number ' + reqNumb + ' is not found in the array.');
}

numbers.pop();
console.log('Updated Numbers: ' + numbers);

numbers.sort((a, b) => a - b);
console.log('Sorted Numbers: ' + numbers);
