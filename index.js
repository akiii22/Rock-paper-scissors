const p1El = document.getElementById("p1");
const p2El = document.getElementById("p2");
const image1El = document.getElementById("img1");
const image2El = document.getElementById("img2");
const textEl = document.getElementById("text");
const btnEl = document.getElementById("btn");


function startGame(){
  let randomNum1 = Math.floor(Math.random()*3) + 1;
  let randomNum2 = Math.floor(Math.random()*3) + 1;

  image1El.src = `img/rock${randomNum1}.svg`;
  image2El.src = `img/rock${randomNum2}.svg`;

  if (
    (randomNum1 === 1 && randomNum2 === 2) ||
    (randomNum1 === 2 && randomNum2 === 3) ||
    (randomNum1 === 3 && randomNum2 === 1)
  ) {
    textEl.textContent = "The winner is " + p1El.textContent + " ⚔️";
  } else if (
    (randomNum1 === 1 && randomNum2 === 3) ||
    (randomNum1 === 2 && randomNum2 === 1) ||
    (randomNum1 === 3 && randomNum2 === 2)
  ) {
    textEl.textContent = "The winner is " + p2El.textContent + " ⚔️";
  } else if (randomNum1 === randomNum2) {
    textEl.textContent = "Its a Tie"
  }
  
}

btnEl.addEventListener("click", startGame);