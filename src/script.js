// if the city = undefined, none of the variables can be assigned values so the else statement will 
// never execute. First I have to check if the city exists in the weather object, THEN I can assign 
// the values

// if(weather[city]) {
//     let temp = weather[city].temp;
//     let humidity = weather[city].humidity;
//     let cTemp = Math.round(temp);
//     let fTemp = Math.round((temp * 9/5) + 32 );
//     alert(`It is currently (${cTemp}C°/${fTemp}F°) in ${city} with a humidity of ${humidity}.`);
// } else {
//     alert(`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`)
// };

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

  let hour = now.getHours();
  let minute = now.getMinutes();
  
  let currentDay = document.querySelector("#current-day");
  let currentHour = document.querySelector("#hour");
  let currentMinute = document.querySelector("#minute")
  
  currentDay.innerHTML = weekdays[now.getDay()]
  
  if(hour > 12) {
    currentHour.innerHTML = hour-12;  
  } else {
    currentHour.innerHTML = hour;
  }
  
// fix the conditional below...

  if(minute < 10) {
    currentMinute.innerHTML = `0${minute}`;
    if(hour>12) {
      currentMinute.innerHTML = `0${minute}PM`;
    } else {
      currentMinute.innerHTML = `0${minute}AM`;
    }
  } else {
    currentMinute.innerHTML = minute;
    if(hour>12) {
      currentMinute.innerHTML = `${minute} PM`;
    } else {
      currentMinute.innerHTML = `${minute} AM`;
    }
  }
  
}

setInterval(getDate, 1000)








// City search engine function *START HERE after reading comments 
function searchCity(event) {
  event.preventDefault();

  let currentCity = document.querySelector(".current-city")
  currentCity.innerHTML = searchInput.value
}

let apiKey = "333a6dab9tcf6097oe954a0dcb8f80ec";
let searchInput = document.querySelector("#search-input")
let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;

let searchForm = document.querySelector("#search-form")
searchForm.addEventListener("submit", searchCity)

// axios.get(weatherUrl).then(searchCity) 
// gotta change the name of the function or modify it (nest functions? change exising function to submitForm and nest the actual searchCity func)
// modify if statement to show 'Ante Meridiem' and 'Post Meridiem'
// assign the condition, temperature, humidity, and wind elements to a variable

/* Instructions
  The date area should show the current time and date
   */