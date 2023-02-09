var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");

var full_name = fname.concat(lname);

document.getElementsByTagName("h1")[0].innerHTML +=
    "<span class='length-style'>" + calculate_length() + "</span>";

function calculate_length() {
  return full_name.length.toString().concat(" Chars");
}

for (var i = 0; i < full_name.length; ++i){
    var list_item = document.createElement("li");
    list_item.innerHTML = full_name[i];
    document.body.children[0].children[2].appendChild(list_item);
}
