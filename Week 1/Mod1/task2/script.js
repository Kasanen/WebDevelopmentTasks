const positions = prompt('Write positions x1 x2 y1 y2 using space between:');

const pos = positions.split(' ');
const x1 = pos[0];
const x2 = pos[1];
const y1 = pos[2];
const y2 = pos[3];
const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.querySelector('#result').innerHTML = `Distance: ` + distance;
