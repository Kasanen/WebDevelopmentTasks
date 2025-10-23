const input = prompt('Temperature in Celsius');
if (!isNaN(input) && input !== null && input !== '') {
  let C = parseFloat(input);
  let F = (C * 9) / 5 + 32;
  let K = C + 273.15;

  document.querySelector('#celsius').innerHTML = 'Celsius: ' + C;
  document.querySelector('#fahrenheit').innerHTML = 'Fahrenheit: ' + F;
  document.querySelector('#kelvin').innerHTML = 'Kelvin: ' + K;
} else {
  document.querySelector('#celsius').innerHTML = 'Not valid input';
}
