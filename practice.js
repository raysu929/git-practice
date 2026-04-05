const redButton = document.createElement("button");
redButton.innerHTML = "RED";
const blueButton = document.createElement("button");
blueButton.innerHTML = "BLUE";
const clearButton = document.createElement("button");
clearButton.innerHTML = "CLEAR ALL";

const redClear = document.createElement("button");
redClear.innerHTML = "CLEAR RED";

redButton.addEventListener("click", function () {
  const redp = document.createElement("p");
  redp.classList.add("red-text");
  redp.innerText = "Im a red paragraph";
  redp.style.color = "red";

  document.body.appendChild(redp);
});

blueButton.addEventListener("click", function () {
  const bluep = document.createElement("p");
  bluep.innerText = "Im a blue paragraph";
  bluep.style.color = "blue";

  document.body.appendChild(bluep);
});

clearButton.addEventListener("click", function () {
  const paragraph = document.querySelectorAll("p");
  paragraph.forEach((p) => p.remove());
});

redClear.addEventListener("click", function () {
  const paragraph = document.querySelectorAll(".red-text");
  paragraph.forEach((p) => p.remove());
});

document.body.append(redButton, blueButton, clearButton, redClear);
