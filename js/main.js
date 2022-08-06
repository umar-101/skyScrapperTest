const words = ["lorum", "ipsum", "lorum ipsum"];

function myFunction() {
  number = Math.floor(Math.random() * 3);
  document.getElementById("clickedelement").innerHTML = words[number];
}
