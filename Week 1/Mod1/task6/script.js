var targetSection = document.getElementById('h');
var tbl = document.createElement('table');
var tbdy = document.createElement('tbody');

const integer = parseInt(prompt('Enter a positive integer: '));

if (integer > 0) {
  for (let i = 1; i <= integer; i++) {
    var tr = document.createElement('tr');

    for (let j = 1; j <= integer; j++) {
      var td = document.createElement('td');

      td.textContent = j * i;
      tr.appendChild(td);
    }

    tbdy.appendChild(tr);
  }

  tbl.appendChild(tbdy);
  targetSection.appendChild(tbl);
}
