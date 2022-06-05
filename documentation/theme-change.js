const darkModeIcon = document.getElementById("dark-mode");
const lightModeIcon = document.getElementById("light-mode");
const h1Array = [...document.querySelectorAll("h1")];
const h3Array = [...document.querySelectorAll("h3")];
const h4Array = [...document.querySelectorAll("h4")];
const pArray = [...document.querySelectorAll("p")];
const olArray = [...document.querySelectorAll("ol")];
const asideArray = [...document.querySelectorAll(".aside-container a")];

const darkMode = () => {
  document.body.style.backgroundColor = "#161B22";
  h1Array.forEach((e, index) => {
    if (index === [0, 13].find((num) => num === index)) {
      return;
    }
    e.style.color = "white";
  });
  h3Array.forEach((e, index) => {
    if (
      index ===
      [10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 34].find(
        (num) => num === index
      )
    ) {
      return;
    }
    e.style.color = "white";
  });
  h4Array.forEach((e, index) => {
    if (index === [0, 1, 2, 3, 4].find((num) => num === index)) {
      return;
    }
    e.style.color = "white";
  });
  pArray.forEach((e, index) => {
    if (
      index ===
      [
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46,
      ].find((num) => num === index)
    ) {
      return;
    }
    e.style.color = "white";
  });
  olArray.forEach((e, index) => {
    if (index === [3, 4, 5, 6, 7].find((num) => num === index)) {
      return;
    }
    e.style.color = "white";
  });
  asideArray.forEach((e) => {
    e.style.color = "white";
  });
};

const lightMode = () => {
  document.body.style.backgroundColor = "#F7F7F7";
  h1Array.forEach((e, index) => {
    if (index === [0, 10].find((num) => num === index)) {
      return;
    }
    e.style.color = "black";
  });
  h3Array.forEach((e, index) => {
    if (index === [10, 14, 15, 18, 22, 23, 26].find((num) => num === index)) {
      return;
    }
    e.style.color = "black";
  });
  h4Array.forEach((e) => {
    e.style.color = "black";
  });
  pArray.forEach((e) => {
    e.style.color = "black";
  });
  olArray.forEach((e) => {
    e.style.color = "black";
  });
  asideArray.forEach((e) => {
    e.style.color = "black";
  });
};

darkModeIcon.addEventListener("click", () => {
  if ((document.body.style.backgroundColor = "#F7F7F7")) {
    darkMode();
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";
  }
});
lightModeIcon.addEventListener("click", () => {
  if ((document.body.style.backgroundColor = "#161B22")) {
    lightMode();
    darkModeIcon.style.display = "block";
    lightModeIcon.style.display = "none";
  }
});
