document.querySelector(".insertBtn button").addEventListener("click", newBlock);

function newBlock() {
  var newInsertBlock = document.createElement("div");
  newInsertBlock.classList.add("block");
  newInsertBlock.style.backgroundColor =
    "rgb(" +
    createRandomNumber() +
    "," +
    createRandomNumber() +
    "," +
    createRandomNumber() +
    ")";
  document.querySelector(".blocks").appendChild(newInsertBlock);
}

function createRandomNumber() {
  var randomNumber = (Math.random() * 100) % 256;
  return randomNumber;
}
