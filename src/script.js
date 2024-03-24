// Time/Date function
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

  if(hour > 12) {
    hour = hour-12;  
    meridiem = "pm"
  } else {
    meridiem = "am"
  };
  
  // add Ante/Post Meridiem conditional
  
  if(minute < 10) {
    minute = `0${minute}`;
    
  } else {
    minute = minute;
  }
  
  currentDateInfo.innerHTML = `${currentDay} ${hour}:${minute}${meridiem}`
};

setInterval(getDate, 1000);




// City search engine function *START HERE after reading comments 



function searchCity(event) {
  event.preventDefault();
  
  let currentCityElement = document.querySelector(".current-city")
  currentCityElement.innerHTML = searchInput.value

  function displayCityInfo(response) {
    console.log(response.data)
  }
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;
  axios.get(weatherUrl).then(displayCityInfo) 
}




let apiKey = "333a6dab9tcf6097oe954a0dcb8f80ec";
let searchInput = document.querySelector("#search-input")

let searchForm = document.querySelector("#search-form")
searchForm.addEventListener("submit", searchCity)

// gotta change the name of the function or modify it (nest functions? change exising function to submitForm and nest the actual searchCity func)

/* Instructions
  The date area should show the current time and date
   */