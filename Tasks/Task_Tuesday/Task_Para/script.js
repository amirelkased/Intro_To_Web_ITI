var paragraph = prompt("Enter you paragraph!");

var lookup_char = prompt("Enter you char!");

var counter = 0;
var arrOfIndex = [];
search();

function search() {
  for (var i = 0; i < paragraph.length; ++i) {
    if (paragraph[i] == lookup_char) {
      ++counter;
      arrOfIndex.push(i);
    }
  }
}

document.querySelector(".container p").innerHTML = paragraph;
document.querySelector("h2 .keychar").innerHTML = lookup_char;
document.querySelector("h2 .noOccurs").innerHTML = counter;

if (counter == 0) {
  var list_item = document.createElement("li");
  list_item.innerHTML = "No any Occurs Found!";
  list_item.classList.add("empty-list");
  document.querySelector(".occurance ol").appendChild(list_item);
} else {
  for (var i = 0; i < arrOfIndex.length; ++i) {
    var list_item = document.createElement("li");
    list_item.innerText = arrOfIndex[i];
    document.querySelector(".occurance ol").appendChild(list_item);
  }
}
