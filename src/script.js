// Time/Date function
/* refactor date function so I can pass any date as the parameters */
function getDate() {
  let now = new Date();
  
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  let currentDay = weekdays[now.getDay()]
  let hour = now.getHours();
  let minute = now.getMinutes();
  
  let currentDateInfo = document.querySelector("#current-date-info");
  let meridiem = document.querySelector("#meridiem");

  // consolidate the conditionals below for the hour
  if(hour > 12) {
    hour = hour-12;  
    meridiem = "pm"
  } else {
    meridiem = "am"
  };

  if(hour == 0) {
    hour = 12
  }
  
  
  if(minute < 10) {
    minute = `0${minute}`;
    
  } else {
    minute = minute;
  }
  
  currentDateInfo.innerHTML = `${currentDay} ${hour}:${minute}${meridiem}`
};

setInterval(getDate, 1000);




// refactor this function by referencing https://rebrand.ly/2aa9b5
function searchCity(event) {
  event.preventDefault();
  
  function displayCityInfo(response) {
    if(response.data.status == "not_found") {
      /* find the google url found in previous lessons/challenges */
      alert("City not found. Please try again.")
      return
    }
    
    let currentCityEl = document.querySelector(".current-city")
    let currentTempEl = document.querySelector("#current-temp")
    let currentConditionEl = document.querySelector("#current-condition") 
    let currentHumidityEl = document.querySelector("#humidity")
    let currentWindSpeedEl = document.querySelector("#wind")

    currentCityEl.innerHTML = response.data.city
    currentTempEl.innerHTML = Math.round(response.data.temperature.current)
    currentConditionEl.innerHTML = response.data.condition.description;
    currentHumidityEl.innerHTML = response.data.temperature.humidity;
    // add conditional for metric data (meter/sec)
    currentWindSpeedEl.innerHTML = `${Math.round(response.data.wind.speed)}mph`
  }
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;
  axios.get(weatherUrl).then(displayCityInfo) 
}


 

let apiKey = "333a6dab9tcf6097oe954a0dcb8f80ec";
let searchInput = document.querySelector("#search-input")

let searchForm = document.querySelector("#search-form")
searchForm.addEventListener("submit", searchCity)
