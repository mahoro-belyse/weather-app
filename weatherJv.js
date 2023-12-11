function search(event) {
  event.preventDefault();
  let searchbar = document.querySelector("#SearchInput");

  call(searchbar.value);
}
let searchinput = document.querySelector("#searchform");
searchinput.addEventListener("submit", search);
function call(city) {
  let apiKey = `d860d36baeo33ebcafd4ec2d01tf4406`;
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiurl).then(exchange);
}
function exchange(response) {
  let temperatureElement = document.querySelector("#temperaturechange");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
}
