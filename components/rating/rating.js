const starOne = document.getElementById("star-one");
const starTwo = document.getElementById("star-two");
const starThree = document.getElementById("star-three");
const starFour = document.getElementById("star-four");
const starFive = document.getElementById("star-five");
const btn = document.getElementById("btn");

starOne.addEventListener("click", () => {
  starOne.style.color = "orange";
  starTwo.style.color = "gray";
  starThree.style.color = "gray";
  starFour.style.color = "gray";
  starFive.style.color = "gray";
});
starTwo.addEventListener("click", () => {
  starOne.style.color = "orange";
  starTwo.style.color = "orange";
  starThree.style.color = "gray";
  starFour.style.color = "gray";
  starFive.style.color = "gray";
});
starThree.addEventListener("click", () => {
  starOne.style.color = "orange";
  starTwo.style.color = "orange";
  starThree.style.color = "orange";
  starFour.style.color = "gray";
  starFive.style.color = "gray";
});
starFour.addEventListener("click", () => {
  starOne.style.color = "orange";
  starTwo.style.color = "orange";
  starThree.style.color = "orange";
  starFour.style.color = "orange";
  starFive.style.color = "gray";
});
starFive.addEventListener("click", () => {
  starOne.style.color = "orange";
  starTwo.style.color = "orange";
  starThree.style.color = "orange";
  starFour.style.color = "orange";
  starFive.style.color = "orange";
});
btn.addEventListener("click", () => {
  starOne.style.color = "gray";
  starTwo.style.color = "gray";
  starThree.style.color = "gray";
  starFour.style.color = "gray";
  starFive.style.color = "gray";
});