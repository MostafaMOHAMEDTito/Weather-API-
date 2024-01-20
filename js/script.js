const searchInput = document.getElementById("inputSearch");
const toDayName = document.getElementById("today_name");
const toDayData = document.getElementById("today_date");
const toDayCity = document.getElementById("today-city");
const toDayTemp = document.getElementById("today_temp");
const toDayImg = document.getElementById("today_img");
const toDayText = document.getElementById("today-text");
const ToDayHumidity = document.getElementById("humidity");
const toDayWind = document.getElementById("wind_kph");
const toDayDir = document.getElementById("wind_dir");
const toDayNumber = document.getElementById("today_number");
const nextDay = document.getElementById("tomorrow");
let toDay = new Date();
toDayName.innerHTML = toDay.toLocaleDateString("en-us", { weekday: "long" });
toDayData.innerHTML = toDay.toLocaleDateString("en-us", { month: "long" });
toDayNumber.innerHTML = toDay.getDate();
searchInput.addEventListener("input", function () {
   let weatherCity = searchInput.value;
   startData(weatherCity) 
});
async function getWeatherData(cityName) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=4396e9504ea2433aa4663534241401&q=${cityName}`
  );
  let finalResponse = await response.json();
  return finalResponse;
}
function disPlayToDayData(data) {
  let toDay = new Date();
  let nextTomorrow = toDay.toLocaleDateString("en-us", { weekday: "long" });
  toDayName.innerHTML = toDay.toLocaleDateString("en-us", { weekday: "long" });
  toDayData.innerHTML = toDay.toLocaleDateString("en-us", { month: "long" });
  toDayNumber.innerHTML = toDay.getDate();
  
  toDayCity.innerHTML = data.location.name;
  toDayTemp.innerHTML = data.current.temp_c;
  toDayImg.setAttribute("src", data.current.condition.icon);
  toDayText.innerHTML = data.current.condition.text;
  ToDayHumidity.innerHTML = data.current.humidity;
  toDayWind.innerHTML = data.current.wind_kph;
  toDayDir.innerHTML = data.current.wind_dir;
}
// function displayNextDay() {
//   for (let i = 0; i < 2; i++) {
//     let tomorrow = new Date();
//     let nextTomorrow = tomorrow.toLocaleDateString("en-us", {
//       weekday: "long",
//     });
//     nextDay[i].innerHTML = nextTomorrow[+i];
//   }
// }
async function startData(cityData="cairo") {
  let weatherData = await getWeatherData(cityData);
  if(!weatherData.error){
    disPlayToDayData(weatherData);
  }
 
  // displayNextDay();
}


