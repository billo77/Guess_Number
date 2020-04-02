var rnumber, counter, hak = 100;
var start = document.querySelector('#start');
var guess = document.querySelector('#guess');
var number = document.querySelector('#number');

start.onclick = function () {
  guess.disabled = false;
  rnumber = Math.round(Math.random() * 100);
  counter = 0;
}
guess.onclick = function () {
  counter++;
  if (rnumber != number.value && counter > hak) {
    alert("unfortunatly, end of your turn ;");
    guess.disabled = true;
  }
  if (rnumber == number.value) {
    alert('Congratulations, you won !');
  }
  else if (number.value > rnumber) {
    alert('Give a smaller Number !');
  }
  else {
    alert('Give a bigger Number !');
  }
}