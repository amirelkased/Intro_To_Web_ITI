document.write("<h1>Task Three - Game</h1>");

var randNumber = Math.ceil(Math.random() * 10);
console.log(randNumber);
var cnt = 1;
var fname = prompt("First Name");
var lname = prompt("Last Name");

for (; cnt < 4; ++cnt) {
  var guessNum = prompt("Enter You Guess from 0 : 10");
  if (check(guessNum)) {
    success();
    break;
  }
  if (cnt + 1 == 4) {
    fail();
  }
}

function check(number) {
  if (number == randNumber) {
    return true;
  } else {
    return false;
  }
}

function success() {
  document.write("<p style='color:green'>Congrats!</p>");
  document.write(
    "<p style='color:green'>The number is : " + randNumber + "</p>"
  );
}
function fail() {
  document.write("<p style='color:red'>Hard luck!</p>");
  document.write("<p style='color:red'>The number is : " + randNumber + "</p>");
}
