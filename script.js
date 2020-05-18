var restart = document.querySelector("#bt")
var square = document.querySelectorAll('td')

function clear() {
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = '';
  }
}
restart.addEventListener('click',clear);

function add() {
  if(this.textContent === '')
   this.textContent = 'X'
  else if (this.textContent === 'X') {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click',add);
}
