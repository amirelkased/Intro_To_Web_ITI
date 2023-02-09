var date = new Date();
document.querySelector("h2").innerText = date;

document.querySelector(".random-block").addEventListener("click", openRandom);
document
  .querySelector(".mouse-event")
  .addEventListener("click", openMouseEvent);
document.querySelector(".gallery").addEventListener("click", openGallery);

function openRandom() {
  window.open("random.html", "_blank");
}
function openMouseEvent() {
  window.open("mouse-event.html", "_blank");
}
function openGallery() {
  window.open("gallery.html", "_blank");
}
