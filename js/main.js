console.log("Button Clicked");

var v = document.getElementById("banner-video");
//var v = document.getElementsByClassName("app__video-play-button");

console.log(v);
v.addEventListener(
  "play",
  function () {
    v.play();
  },
  false
);

v.onclick = function () {
  if (v.paused) {
    v.play();
  } else {
    v.pause();
  }

  return false;
};

// form Validation

firstName = document.getElementById("fName");
lastName = document.getElementById("lName");
email = document.getElementById("email");
company = document.getElementById("company");
form = document.getElementById("form");
toolTip = document.getElementById("tool-tip");

firstNameErr = document.getElementById("fNameError");
lNameError = document.getElementById("lNameError");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (firstName.value === "" || firstName.value == null) {
    firstNameErr.classList.add("error");
  } else if (lastName.value === "" || lastName.value == null) {
    lNameError.classList.add("error");
    e.preventDefault();

    messages.push("error appeared");
  }
});

let inputElem = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleam = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleama = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleamas = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleamasaaaa = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleamasaaaaam = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleamasaaasam = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});

let inputEleamasaaaasam = document.querySelector("input");

inputElem.addEventListener("input", () => {
  firstNameErr.classList.remove("error");
  lNameError.classList.remove("error");
});
