const darkModeIcon = document.getElementById("dark-mode");
const lightModeIcon = document.getElementById("light-mode");
localStorage.setItem("theme", "light");
let getLocalStorageValue = localStorage.getItem("theme");

const h1Array = [...document.querySelectorAll("h1")];
const h3Array = [...document.querySelectorAll("h3")];
const h4Array = [...document.querySelectorAll("h4")];
const pArray = [...document.querySelectorAll("p")];
const olArray = [...document.querySelectorAll("ol")];
const asideArray = [...document.querySelectorAll(".aside-container a")];

const swapTheme = (theme) => {
  localStorage.setItem("theme", theme);
  getLocalStorageValue = localStorage.getItem("theme");
}

const darkMode = () => {
  document.body.style.backgroundColor = "black";
  h1Array.map((e, index) => {
    if (
      index ==
      [0, 13].filter((num) => {
        if (num == index) {
          return num;
        }
      })
    ) {
      return;
    }
    e.style.color = "white";
  });
  h3Array.map((e, index) => {
    if (index == 0) {
      e.style.color = "white";
    }
    if (
      index ==
      [10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 34].filter(
        (num) => {
          if (num == index) {
            return num;
          }
        }
      )
    ) {
      return;
    }
    e.style.color = "white";
  });
  h4Array.map((e, index) => {
    if (
      index ==
      [0, 1, 2, 3, 4].filter((num) => {
        if (num == index) {
          return num;
        }
      })
    ) {
      return;
    }
    e.style.color = "white";
  });
  pArray.map((e, index) => {
    if (index == 0) {
      e.style.color = "white";
    }
    if (
      index ==
      [
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46,
      ].filter((num) => {
        if (num == index) {
          return num;
        }
      })
    ) {
      return;
    }
    e.style.color = "white";
  });
  olArray.map((e, index) => {
    if (index == 0) {
      e.style.color = "white";
    }
    if (
      index ==
      [3, 4, 5, 6, 7].filter((num) => {
        if (num == index) {
          return num;
        }
      })
    ) {
      return;
    }
    e.style.color = "white";
  });
  asideArray.map((e) => {
    e.style.color = "white";
  });
}

const lightMode = () => {
  document.body.style.backgroundColor = "white";
  h1Array.map((e, index) => {
    if (
      index ==
      [0, 10].filter((num) => {
        if (num == index) {
          return num;
        }
      })
    ) {
      return;
    }
    e.style.color = "black";
  });
  h3Array.map((e, index) => {
    if (index == 0) {
      e.style.color = "black";
    }
    if (
      index ==
      [10, 14, 15, 18, 22, 23, 26].filter((num) => {
        if (num == index) {
          return num;
        }
      })
    ) {
      return;
    }
    e.style.color = "black";
  });
  h4Array.map((e) => {
    e.style.color = "black";
  });
  pArray.map((e) => {
    e.style.color = "black";
  });
  olArray.map((e) => {
    e.style.color = "black";
  });
  asideArray.map((e) => {
    e.style.color = "black";
  });
}

darkModeIcon.addEventListener("click", () => {
  if (getLocalStorageValue === "light") {
    darkMode();
    swapTheme("dark");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";
  }
});
lightModeIcon.addEventListener("click", () => {
  if (getLocalStorageValue === "dark") {
    lightMode();
    swapTheme("light");
    darkModeIcon.style.display = "block";
    lightModeIcon.style.display = "none";
  }
});
