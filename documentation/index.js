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

window.addEventListener("resize", () => {
  if (window.innerWidth >= "1025") {
    asideBar.style.display = "block";
  }else {
    asideBar.style.display = "none";
  }
});
