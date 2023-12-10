function search(event) {
  event.preventDefault();
  let searchbar = document.querySelector("#SearchInput");
  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = searchbar.value;
}
let searchinput = document.querySelector("#searchform");
searchinput.addEventListener("submit", search);
