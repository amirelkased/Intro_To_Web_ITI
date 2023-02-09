function coordinate(event) {
  var x = event.clientX;
  var y = event.clientY;
  var keypad = event.key;
  document.getElementById("X").value = x;
  document.getElementById("Y").value = y;
  document.getElementById("keypad").value = keypad;d
}

window.onmousemove = coordinate;

window.onkeydown = coordinate;
