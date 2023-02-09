var lastEvent;
function preview1() {
  var addImg = document.createElement("figure");
  var img = document.createElement("img");
  img.setAttribute("src", "imgs/1.jpg");
  addImg.appendChild(img);
  var cap = document.createElement("figcaption");
  cap.innerText = "Image One";
  addImg.appendChild(cap);
  document.querySelector(".preview").replaceChildren(addImg);
  lastEvent = "preview1";
}
function preview2() {
  var addImg = document.createElement("figure");
  var img = document.createElement("img");
  img.setAttribute("src", "imgs/2.jpg");
  addImg.appendChild(img);
  var cap = document.createElement("figcaption");
  cap.innerText = "Image Two";
  addImg.appendChild(cap);
  document.querySelector(".preview").replaceChildren(addImg);
  lastEvent = "preview2";
}
function preview3() {
  var addImg = document.createElement("figure");
  var img = document.createElement("img");
  img.setAttribute("src", "imgs/3.jpg");
  addImg.appendChild(img);
  var cap = document.createElement("figcaption");
  cap.innerText = "Image Three";
  addImg.appendChild(cap);
  document.querySelector(".preview").replaceChildren(addImg);
  lastEvent = "preview3";
}

var newWin;
function openNewWindow() {
  switch (lastEvent) {
    case "preview1":
      newWin = window.open('');
      newWin.document.write("<img src='imgs/1.jpg'></img>");
      break;
    case "preview2":
      newWin = window.open("");
      newWin.document.write("<img src='imgs/2.jpg'></img>");
      break;
    case "preview3":
      newWin = window.open("");
      newWin.document.write("<img src='imgs/3.jpg'></img>");
      break;
    default:
      newWin = window.open("");
      break;
  }
}

document.querySelector(".img1").addEventListener("click", preview1);
document.querySelector(".img2").addEventListener("click", preview2);
document.querySelector(".img3").addEventListener("click", preview3);

document.querySelector('.open').addEventListener('click', openNewWindow);
document.querySelector('.close').addEventListener('click', function () {
  newWin.close()
});

