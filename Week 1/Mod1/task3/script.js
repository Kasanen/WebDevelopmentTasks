const lenghts = prompt('Write lenghts of three sides using space between:');

const side = lenghts.split(' ');
const x1 = side[0];
const x2 = side[1];
const x3 = side[2];

if (x1 === x2 && x2 === x3) {
  document.querySelector('#result').innerHTML = 'Equilateral';
} else if (x1 === x2 || x1 === x3 || x2 === x3) {
  document.querySelector('#result').innerHTML = 'Isosceles';
} else {
  document.querySelector('#result').innerHTML = 'Scalene';
}
