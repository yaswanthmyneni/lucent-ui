// For Modal Component
const modal = document.getElementById("modal");
const modalBg = document.getElementById("modal-bg");
const displayModal = document.getElementById("display-modal");
const closeModal = document.getElementById("close-modal");

displayModal.addEventListener("click", () => {
  modalBg.style.display = "block";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalBg.style.display = "none";
  document.body.style.overflow = "visible";
});

// For Rating Component
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

// aside bar

const asideBar = document.getElementById("aside");
const asideContainer = document.getElementById("aside-container");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (event) => {
  if (asideBar.style.display == "none") {
    asideBar.style.display = "block";
    event.preventDefault();
    document.body.style.overflow = "hidden";
  } else {
    asideBar.style.display = "none";
    event.preventDefault();
    document.body.style.overflow = "visible";
  }
});
