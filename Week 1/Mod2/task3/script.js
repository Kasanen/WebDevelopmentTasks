const numbers = [];
const even = [];

while (true) {
  const numb = prompt("Enter a number (or 'done' to finish): ");
  if (numb == 'done') {
    break;
  } else {
    numbers.push(numb);
  }
}

for (const element of numbers) {
  if (element % 2) {
    console.log('');
  } else {
    even.push(element);
  }
}

if (even.length != 0) {
  document.querySelector('#result').innerHTML = 'Even Numbers: ' + even;
} else {
  document.querySelector('#result').innerHTML = 'Even Numbers: None';
}
