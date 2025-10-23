const integer = parseFloat(prompt('Enter positive integer'));

let final = 0;
for (let i = 0; i <= integer; i++) {
  final += i;
}

document.querySelector('#result').innerHTML = final;
