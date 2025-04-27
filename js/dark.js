const Btn3 = document.querySelector("#switchBtn3");
Btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");
const css = document.querySelector("#dark");

function changeMode3() {
  if (css.href.includes("dark")) {
    css.href = "css/custom.css";
  } else {
    css.href = "css/dark.css";
  }
}

const imageChange = document.querySelector("#biglogo");
document.querySelector("#switchBtn3").addEventListener("click", changeMode);
function changeMode() {
  if (css.href.includes("dark")) {
    imageChange.src = "img/dark-logo.png";
  } else {
    imageChange.src = "img/logo.png";
  }
}

document.querySelector("img/dark-logo.png").style;
